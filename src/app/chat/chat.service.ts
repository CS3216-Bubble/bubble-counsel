import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Chat } from './chat';

@Injectable()
export class ChatService {
  // Placeholder for last id 
  // to simulate auto increment of id
  lastId: number = 0;
  // Placeholder for chats
  chats: Chat[] = [];

  private host: string = window.location.protocol + '//' + window.location.hostname + ':3000';
  // socket: SocketIOClient.Socket;
  socket = null;

  constructor() {
    this.socket = io(this.host);

    let roomListListener = Observable.fromEvent(this.socket, 'list_rooms');
    roomListListener.subscribe((payload) => {
      console.log('room list', payload);
    });

    let createRoomListener = Observable.fromEvent(this.socket, 'create_room');
    createRoomListener.subscribe((payload) => {
      console.log('create room', payload);
    });

    let joinRoomListener = Observable.fromEvent(this.socket, 'join_room');
    joinRoomListener.subscribe((payload) => {
      console.log('join room', payload);
    });
  }


  // Simulate POST /chats
  addChat(chat: Chat): ChatService {
    this.socket.emit('create_room', chat);
    if (!chat.roomId) {
      chat.roomId = '' + (++this.lastId);
    }
    this.chats.push(chat);
    return this;
  }

  // Simulate PUT /chats/:id
  updateChatById(roomId: string, values: Object = {}): Chat {
    let chat = this.getChatById(roomId);
    if (!chat) {
      return null;
    }
    Object.assign(chat, values);
    return chat;
  }

  // Simulate GET /chats
  getAllChats(): Chat[] {
    this.socket.emit('list_rooms');
    return this.chats;
  }

  // Simulate GET /chats/:id
  getChatById(roomId: string): Chat {
    return this.chats
      .filter(chat => chat.roomId == roomId)
      .pop();
  }
}
