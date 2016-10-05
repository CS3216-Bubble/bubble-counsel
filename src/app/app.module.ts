import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatAppRoutes } from './chats.routes';
import { ChatService } from './chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatDetailComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ChatAppRoutes)
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
