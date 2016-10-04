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
    if (!chat.id) {
      chat.id = ++this.lastId;
    }
    this.chats.push(chat);
    return this;
  }

  // Simulate PUT /chats/:id
  updateChatById(id: number, values: Object = {}): Chat {
    let chat = this.getChatById(id);
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
  getChatById(id: number): Chat {
    return this.chats
      .filter(chat => chat.id === id)
      .pop();
  }
}
