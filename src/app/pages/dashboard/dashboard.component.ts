import { Component, OnInit } from '@angular/core';
import { Signer } from 'ethers';
import { ApiService } from 'src/app/services/api.service';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { IAccountInfo, IGroup } from 'src/app/services/model.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  groups: IGroup[] = [];
  accountInfo?: IAccountInfo;

  constructor(
    private apiService: ApiService,
    private blockchainService: BlockchainService
  ) {}

  async ngOnInit(): Promise<void> {
    const user_info = await this.blockchainService.accountInfo();
    const user_address = await user_info.getAddress();
    const list_groups = await this.apiService.listGroups(user_address);
    list_groups.subscribe((res) => {
      this.groups = res;
    });

    if (await this.blockchainService.isAccountConnected()) {
      const account = await this.blockchainService.accountInfo();
      this.assignAccountInfo(account);
    }
  }

  async Connect() {
    const account = await this.blockchainService.connectAccount();

    this.assignAccountInfo(account);
  }

  accountConnected(): boolean {
    return this.accountInfo != undefined;
  }

  async assignAccountInfo(account: Signer) {
    this.accountInfo = {
      name: 'Samnang',
      walletAddress: await account.getAddress(),
    };
  }
}
