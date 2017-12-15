import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { AuthenticationService } from '../authService';
import { environment } from '../../environments/environment';
import { User } from '../User';

const maxmsg = 7;

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})

export class ChattingComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {
    this.socket = io(this.url);

    if(this.authenticationService.user) {
      this.displayName = authenticationService.user.displayName;
    }

    this._subscription = authenticationService.userChange.subscribe((user: User) => {
      if (user) {
        this.displayName = authenticationService.user.displayName;
      } else {
        this.displayName = '익명';
      }
    });

    this.socket.on('connection', () => {
      console.log('connect success');
      this.socket.on('join', function (data) {
        // this.userList = data.json();
        
      });
    });

    this.socket.on('conn', (data) => {
      if(!this.authenticationService.user) {
        this.displayName += data.count
      }
    })

    this.socket.on('leave', function (data) {
      this.userList = data.json();
      console.log('leave');
    });

    this.socket.on('server message', (msg) => {
      this.addMessage(msg.displayName + ' : ' + msg.message);
    });
  }
  url = environment.host;
  socket = null;
  userList: object;
  displayName: string = '익명';
  _subscription;

  ngOnInit() {
    
  }

  sendMessage(msg) {
    this.socket.emit('client message', { message: msg.value, displayName: this.displayName });
  }

  sendMessageOnEnter($event, messagebox) {
    if ($event.which === 13) {
      this.sendMessage(messagebox);
      messagebox.value = '';
    }
  }

  addMessage(msg: string) {
    if (document.getElementById('chatlog').childElementCount > (maxmsg - 2)) {
      document.getElementById('chatlog').removeChild(document.getElementById('chatlog').firstChild);
    }

    let node;
    node = document.createElement('p');
    node.innerHTML = msg;
    document.getElementById('chatlog').appendChild(node);
  }

  ngOnDestroy() {
    this.socket.disconnect();
    this._subscription.unsubscribe();
   }
}
