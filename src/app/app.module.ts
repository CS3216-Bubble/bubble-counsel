import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatAppRoutes } from './chats.routes';
import { ChatService } from './chat/chat.service';
import { IssueService } from './issue/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    IssueListComponent,
    ChatListComponent,
    ChatDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ChatAppRoutes)
  ],
  providers: [
    IssueService,
    ChatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
