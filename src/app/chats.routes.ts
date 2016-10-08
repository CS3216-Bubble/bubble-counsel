import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';

export const ChatAppRoutes = [
  { path: '', component: ChatListComponent },
  { path: 'chat/:roomId', component: ChatDetailComponent }
];
