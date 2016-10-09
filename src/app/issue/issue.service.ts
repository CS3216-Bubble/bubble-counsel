import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { Issue } from './issue';

@Injectable()
export class IssueService {

  // Placeholder for issues
  issues: Issue[] = [];

  private host: string = window.location.protocol + '//' + window.location.hostname + ':3000';
  // socket: SocketIOClient.Socket;
  socket = null;

  constructor() {
    this.socket = io(this.host);

    let issueListListener = Observable.fromEvent(this.socket, 'list_issues');
    issueListListener.subscribe((payload) => {
      console.log('issue list', payload);
      if (payload instanceof Array) {
        for (let issue of payload) {
          this.issues.push(new Issue(issue));
        }
      }
    });

    let addIssueListener = Observable.fromEvent(this.socket, 'add_issue');
    addIssueListener.subscribe((payload) => {
      console.log('add issue', payload);
    });

    let handleIssueListener = Observable.fromEvent(this.socket, 'handle_issue');
    handleIssueListener.subscribe((payload) => {
      console.log('handle issue', payload);
    });

    let errorListener = Observable.fromEvent(this.socket, 'bubble_error');
    errorListener.subscribe((payload) => {
      console.log('error', payload);
    });
  }

  addIssue(issue: Issue) {
    this.socket.emit('add_issue', {
      issue: issue
    });
  }

  handleIssue(issueId: number, counsellorId: string): Issue {
    let issue = this.getIssueById(issueId);

    if (issue.counsellorId === null) {
      issue.counsellorId = counsellorId;
    }
    return issue;
  }

  getAllIssues(): Issue[] {
    // this.socket.emit('list_issues');
    // return this.issues;
    let issue = new Issue({
      userId: 'some user',
      counsellorId: 'some counsellor',
      type: Issue.Type.UserFlagged,
    });

    return [
      issue,
      issue,
      issue,
    ];
  }

  getIssueById(issueId: number): Issue {
    return this.issues
      .filter(issue => issue.id == issueId)
      .pop();
  }
}
