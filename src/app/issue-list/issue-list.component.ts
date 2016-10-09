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

  ngOnInit() {
    this.issues = this.getIssues();
  }
}
