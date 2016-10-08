import { Injectable } from '@angular/core';
import { Chat } from './chat';

@Injectable()
export class ChatService {
  // Placeholder for last id 
  // to simulate auto increment of id
  lastId: number = 0;

  // Placeholder for chats
  chats: Chat[] = [];

  constructor() {}

  // Simulate POST /chats
  addChat(chat: Chat): ChatService {
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
    return this.chats;
  }

  // Simulate GET /chats/:id
  getChatById(roomId: string): Chat {
    return this.chats
      .filter(chat => chat.roomId == roomId)
      .pop();
  }
}
