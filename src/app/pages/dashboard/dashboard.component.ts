import { Component, OnInit } from '@angular/core';
import { Signer } from 'ethers';
import { ApiService } from 'src/app/services/api.service';
import { BlockchainService } from 'src/app/services/blockchain.service';

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
  accountInfo: { walletAddress: string } | undefined = undefined;

  constructor(
    private apiService: ApiService,
    private blockchainService: BlockchainService
  ) {}

  async ngOnInit(): Promise<void> {
    this.groups = this.apiService.listGroups();
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
      walletAddress: await account.getAddress(),
    };
  }
}
