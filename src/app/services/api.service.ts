import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiAddress;

  constructor() {}

  getGroupDetails(groupId: string) {
    return {
      name: 'Friend Hangouts',
      description: 'A description',
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
    };
  }

  listGroups() {
    return [
      {
        name: 'Friend Hangouts',
        description: 'A description',
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
      {
        name: 'Paris Trip',
        description: 'A description',
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
    ];
  }
}
