import { TabContainerComponent } from './tab-container/tab-container.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';

export const ChatAppRoutes = [
  { path: '', component: TabContainerComponent },
  { path: 'issues/list', component: IssueListComponent },
  { path: 'chats/list', component: ChatListComponent },
  { path: 'chats/:roomId', component: ChatDetailComponent }
];
