/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import {Chat} from './chat';

describe('Chat', () => {
  it('should create an instance', () => {
    expect(new Chat()).toBeTruthy();
  });

  let date = new Date();
  it('should accept values in the constructor', () => {
    let chat = new Chat({
      title: 'CS3216 Helpline',
      description: 'Halp',
      categories: ['School', 'Life', 'Relationship'],
      lastActive: date,
    });
    expect(chat.title).toEqual('CS3216 Helpline');
    expect(chat.description).toEqual('Halp');
    expect(chat.categories).toEqual(['School', 'Life', 'Relationship']);
    expect(chat.lastActive).toEqual(date);
  });
});
