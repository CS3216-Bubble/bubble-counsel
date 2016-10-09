/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssueService } from './issue.service';
import { Issue } from './issue';

describe('Service: Issue', () => {
  let date = new Date();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueService]
    });
  });

  describe('#getAllIssues()', () => {
    it('should return an empty array by default', inject([IssueService], (service: IssueService) => {
      expect(service.getAllIssues()).toEqual([]);
    }));

    it('should return all issues', inject([IssueService], (service: IssueService) => {
      let issue1 = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });
      let issue2 = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });

      service.addIssue(issue1);
      service.addIssue(issue2);
      expect(service.getAllIssues()).toEqual([issue1, issue2]);
    }));
  });

  describe('#addIssue(todo)', () => {
    it('should automatically assign an incrementing id', inject([IssueService], (service: IssueService) => {
      let issue1 = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });
      let issue2 = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });

      service.addIssue(issue1);
      service.addIssue(issue2);
      expect(service.getIssueById(1)).toEqual(issue1);
      expect(service.getIssueById(2)).toEqual(issue2);
    }));
  });

  describe('#handleIssueById(id, values', () => {
    it('should return issue with the corresponding id and updated data', inject([IssueService], (service: IssueService) => {
      let issue = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });

      service.addIssue(issue);
      let handledIssue = service.handleIssue(1, 'some_counsellor');
      expect(handledIssue.counsellorId).toEqual('some_counsellor');
    }));

    it('should return null if issue is not found', inject([IssueService], (service: IssueService) => {
      let issue = new Issue({
        user: 'User 1',
        counsellor: 'Counsellor 1',
        type: Issue.Type.UserFlagged,
      });

      service.addIssue(issue);
      let handledIssue = service.handleIssue(1, 'some_counsellor');
      expect(handledIssue).toEqual(null);
    }));
  });

  it('should ...', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
});
