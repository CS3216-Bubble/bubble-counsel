import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { Chat } from '../chat/chat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chats: Chat[];
  newChat: Chat = new Chat();
  constructor(private chatService: ChatService) {}

  addChat() {
    console.log('add chat');
    this.chatService.addChat(this.newChat);
    this.newChat = new Chat();

    this.chats = this.chatService.getAllChats();
  }

  getChats() {
    return this.chatService.getAllChats();
  }

  ngOnInit() {
    this.chats = this.chatService.getAllChats();
  }
}
