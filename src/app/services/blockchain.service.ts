import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ethers, EventFilter, Signer } from 'ethers';
import SplitSum from 'src/assets/contracts/SplitSum.json';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  provider: ethers.providers.Web3Provider;

  constructor() {
    this.provider = new ethers.providers.Web3Provider((window as any).ethereum);
  }

  async isAccountConnected(): Promise<boolean> {
    return (await this.provider.listAccounts()).length > 0;
  }

  async accountInfo(): Promise<Signer> {
    return this.provider.getSigner();
  }

  async connectAccount(): Promise<Signer> {
    await this.provider.send('eth_requestAccounts', []);

    return await this.accountInfo();
  }
}
