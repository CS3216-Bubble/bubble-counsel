import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ChatAppRoutes } from './chats.routes';
import { IssueService } from './issue/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ChatAppRoutes)
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
