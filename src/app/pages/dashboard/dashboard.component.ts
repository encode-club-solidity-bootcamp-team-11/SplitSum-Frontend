import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groups: {
    groupId: string;
    name: string;
    description: string;
    ownerAddress: string;
    memberships: { name: string; walletAddress: string }[];
  }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.groups = this.apiService.listGroups();
  }
}
