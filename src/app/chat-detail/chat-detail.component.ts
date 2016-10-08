import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat/chat.service';
import { Chat } from '../chat/chat';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  chat: Chat;
  constructor(private chatService: ChatService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.chat = this.chatService
      .getChatById(this.route.snapshot.params['roomId']);
    console.log(this.chat);
    this.chatService.joinChat(this.chat.roomId);
  }

}
