import {Component, Inject, OnInit} from '@angular/core';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

const maxmsg = 6;

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html'
})

@Injectable()
export class ChattingComponent implements OnInit {
  url = 'http://localhost:3000';
  socket = io(this.url);

  constructor() {
    this.socket.on('broadcast', function (msg) {
      this.addMessage(msg);
    });
  }

  ngOnInit() {
    for (let i = 0; i < maxmsg; i++) {
      this.addMessage('적당한 메시지');
    }
  }

  sendMessage(data) {
    this.socket.emit('message', data)
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

