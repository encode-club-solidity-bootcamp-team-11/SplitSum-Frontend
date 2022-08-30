import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiAddress;
  GROUPS = {
    'group-1': {
      groupId: 'group-1',
      name: 'Friend Hangouts',
      description: 'Dolor aut molestiae ut et non consequatur',
      ownerAddress: 'xyz',
      memberships: [
        {
          name: 'John',
          walletAddress: '238672783628782638726378',
        },
        {
          name: 'Dara',
          walletAddress: '238672783628782638726378',
        },
      ],
    },
    'group-2': {
      groupId: 'group-2',
      name: 'Paris Trip',
      ownerAddress: 'abc',
      description: 'Adipisci et quibusdam est veritatis',
      memberships: [
        {
          name: 'John',
          walletAddress: '238672783628782638726378',
        },
        {
          name: 'Jane',
          walletAddress: '238672783628782638726378',
        },
      ],
    },
  };

  constructor() {}

  getGroupDetails(groupId: string) {
    return groupId == 'group-1'
      ? this.GROUPS['group-1']
      : this.GROUPS['group-2'];
  }

  listGroups() {
    return [this.GROUPS['group-1'], this.GROUPS['group-2']];
  }
}
