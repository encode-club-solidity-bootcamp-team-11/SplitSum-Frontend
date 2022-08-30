import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'group-details',
  templateUrl: './group_details.component.html',
  styleUrls: ['./group_details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  group: {
    name: string;
    description: string;
    memberships: { name: string; walletAddress: string }[];
  } = { name: '', description: '', memberships: [] };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.group = this.apiService.getGroupDetails('group-id-1');
  }
}
