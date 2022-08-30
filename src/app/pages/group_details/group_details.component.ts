import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'group-details',
  templateUrl: './group_details.component.html',
  styleUrls: ['./group_details.component.scss'],
})
export class GroupDetailsComponent implements OnInit {
  group: {
    groupId: string;
    name: string;
    description: string;
    ownerAddress: string;
    memberships: { name: string; walletAddress: string }[];
  } = {
    groupId: '',
    name: '',
    description: '',
    ownerAddress: '',
    memberships: [],
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.group = this.apiService.getGroupDetails(
      this.route.snapshot.paramMap.get('id')!
    );
  }
}
