import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue/issue.service';
import { Issue } from '../issue/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[];
  constructor(private issueService: IssueService) {}

  handleIssue(issueId: number, counsellorId: string) {
    this.issueService.handleIssue(issueId, counsellorId);
  }

  getIssues() {
    return this.issueService.getAllIssues();
  }

  getFormattedIssueTitle(issue: Issue) {
    var typeString: string;
    switch (issue.type) {
      case Issue.Type.UserFlagged:
        typeString = " was flagged.";
        break;
      case Issue.Type.UserRequested:
        typeString = " requested a chat.";
        break;
      case Issue.Type.UserMissed:
        typeString = "'s chat request was missed.'";
        break;
      default:
        typeString = " has an issue.";
        break;
    }

    // TODO retrieve user name
    var userName = "User " + issue.userId;

    return userName + typeString;
  }

  getCounsellorName(issue: Issue) {
    if (issue.counsellorId === null) {
      return "None";
    } else {
      // TODO retrieve counsellor name
      return "Counsellor " + issue.counsellorId;
    }
  }

  ngOnInit() {
    this.issues = this.getIssues();
  }
}
