import {Component, Inject, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
//import { Socket } from 'ng2-socket-io';

const maxmsg = 6;

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html'
})

@Injectable()
export class ChattingComponent implements OnInit {

  //constructor(private socket: Socket) {}

  ngOnInit() {
    for (let i = 0; i < maxmsg; i++) {
      this.addMessage('적당한 메시지');
    }
  }

  sendMessage(data) {
    this.addMessage(data.value);
    }

  sendMessageOnEnter($event, messagebox) {
    if ($event.which === 13) {
      this.sendMessage(messagebox);
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
}

