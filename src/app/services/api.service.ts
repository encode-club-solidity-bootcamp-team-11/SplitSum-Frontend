import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import { IGroup } from 'src/app/services/model.service';
import { BlockchainService } from 'src/app/services/blockchain.service';


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

  constructor(private http: HttpClient) {}

  getGroupDetails(groupId: string) {
    // return groupId == 'group-1'
    //   ? this.GROUPS['group-1']
    //   : this.GROUPS['group-2'];
      return this.http.get<IGroup>(`${this.apiUrl}groups/user`);
  }

  async listGroups(user_address: string) {
    // const user_info = await this.blockchainService.accountInfo();
    // const user_address = await user_info.getAddress();
    // (this.http.get<IGroup[]>(`${this.apiUrl}groups/user`, 
    // {params:{'user_addr':user_address}})).subscribe((res) => {
    //    console.log(res);
    // });
    return this.http.get<IGroup[]>(`${this.apiUrl}groups/user`, 
    {params:{'user_addr':user_address}});
  }

  async createExpense(
    groupId: string,
    amount: number,
    description: string,
    members: string[]
  ) {
    return true;
  }
}
