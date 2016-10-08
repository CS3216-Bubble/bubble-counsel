=/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { Chat } from './chat';


describe('Service: Chat', () => {
  let date = new Date();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  describe('#getAllChats()', () => {
     it('should return an empty array by default', inject([ChatService], (service: ChatService) => {
       expect(service.getAllChats()).toEqual([]);
     }));

     it('should return all chats', inject([ChatService], (service: ChatService) => {
        let chat1 = new Chat({
          roomName: 'CS3216 Helpline',
          roomDescription: 'Halp',
          categories: ['School', 'Life', 'Relationship'],
          lastActive: date,
        });
        let chat2 = new Chat({
          roomName: 'CS3103 Helpline',
          roomDescription: 'Halp',
          categories: ['School', 'Life', 'Relationship'],
          lastActive: date,
        });

        service.addChat(chat1);
        service.addChat(chat2);
        expect(service.getAllChats()).toEqual([chat1, chat2]);
     }));
  });

  describe('#addChat(todo)', () => {
   it('should automatically assign an incrementing id', inject([ChatService], (service: ChatService) => {
    let chat1 = new Chat({
      roomName: 'CS3216 Helpline',
      roomDescription: 'Halp',
      categories: ['School', 'Life', 'Relationship'],
      lastActive: date,
    });
    let chat2 = new Chat({
      roomName: 'CS3103 Helpline',
      roomDescription: 'Halp',
      categories: ['School', 'Life', 'Relationship'],
      lastActive: date,
    });
    service.addChat(chat1);
    service.addChat(chat2);
    expect(service.getChatById(1)).toEqual(chat1);
    expect(service.getChatById(2)).toEqual(chat2);
   }));
 });

   describe('#updateChatById(id, values', () => {
     it('should return char with the corresponding id and updated data', inject([ChatService], (service: ChatService) => {
        let chat = new Chat({
          roomName: 'CS3216 Helpline',
          roomDescription: 'Halp',
          categories: ['School', 'Life', 'Relationship'],
          lastActive: date,
        });
        service.addChat(chat);
        let updatedChat = service.updateChatById(1, {
          roomName: 'New Chat Title'
        });
        expect(updatedChat.roomName).toEqual('New Chat Title');
     }));

     it('should return null if chat is not found', inject([ChatService], (service: ChatService) => {
       let chat = new Chat({
          roomName: 'CS3216 Helpline',
          roomDescription: 'Halp',
          categories: ['School', 'Life', 'Relationship'],
          lastActive: date,
        });
       service.addChat(chat);
       let updatedChat = service.updateChatById(2, {
         roomName: 'New Chat Title'
       });
       expect(updatedChat).toEqual(null);
     }));
   });

  it('should ...', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
