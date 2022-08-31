import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { IGroup } from 'src/app/services/model.service';

@Component({
  selector: 'group-box',
  templateUrl: './group_box.component.html',
  styleUrls: ['./group_box.component.scss'],
})
export class GroupBoxComponent implements OnInit {
  @Input() group!: IGroup;
  userBalance = 0
  constructor(private apiService: ApiService, private blockchainService: BlockchainService) {}

  async ngOnInit(): Promise<void> {
    const user_info = await this.blockchainService.accountInfo();
    const user_address = await user_info.getAddress();
    const membership = this.group.memberships.find(membership => membership.walletAddress == user_address);
    this.userBalance = membership!.balance;
    
  }

  // async userBalance() {
  //   const user_info = await this.blockchainService.accountInfo();
  //   const user_address = await user_info.getAddress();
  //   const membership = this.group.memberships.find(membership => membership.walletAddress == user_address);
  //   return membership?.balance;
  // }
}


