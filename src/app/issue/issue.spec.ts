/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { Issue } from './issue';

describe('Issue', () => {
  it('should create an instance', () => {
    expect(new Issue()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let issue = new Issue({
      user: 'User 1',
      counsellor: 'Counsellor 1',
      type: Issue.Type.UserFlagged,
    });

    expect(issue.user).toEqual('User 1');
    expect(issue.counsellor).toEqual('Counsellor 1');
    expect(issue.type).toEqual(Issue.Type.UserFlagged);
  });
});
