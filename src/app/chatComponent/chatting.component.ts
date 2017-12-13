import {Component, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

const maxmsg = 7;

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})

export class ChattingComponent implements OnInit {
  url = 'http://localhost:3000';
  socket = io(this.url);
  userList: object;

  ngOnInit() {
    this.socket.on('connection', () => {
      console.log('connect success');
      this.socket.on('join', function (data) {
        this.userList = data.json();
        console.log('join');
      });
    });

    this.socket.on('leave', function (data) {
      this.userList = data.json();
      console.log('leave');
    });

    this.socket.on('server message', (msg) => {
      const name = msg.displayname ? msg.displayname : '익명';
      this.addMessage(name + ' : ' + msg.message);
    });
  }

      sendMessage(msg) {
        this.socket.emit('client message', {message: msg.value});
      }

      sendMessageOnEnter($event, messagebox) {
        if ($event.which === 13) {
          this.sendMessage(messagebox);
          messagebox.value = '';
        }
      }

      addMessage(msg: string) {
        if (document.getElementById('chatlog').childElementCount > (maxmsg - 2)) {
          console.log(msg);
          document.getElementById('chatlog').removeChild(document.getElementById('chatlog').firstChild);
        }

        let node;
        node = document.createElement('p');
        node.innerHTML = msg;
        document.getElementById('chatlog').appendChild(node);
      }
    }
