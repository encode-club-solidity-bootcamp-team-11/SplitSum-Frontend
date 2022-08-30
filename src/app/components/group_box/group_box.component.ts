import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'group-box',
  templateUrl: './group_box.component.html',
  styleUrls: ['./group_box.component.scss'],
})
export class GroupBoxComponent implements OnInit {
  @Input() group: {
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

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
