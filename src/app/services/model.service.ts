export interface IGroup {
  groupId: string;
  name: string;
  description: string;
  ownerAddress: string;
  memberships: IGroupMembership[];
}

export interface IGroupMembership {
  walletAddress: string;
  name: string;
}

export interface IAccountInfo {
  name?: string;
  walletAddress: string;
}

export interface IExpense {
  expenseId: string;
  paidByUserAddress: string;
  amount: number;
  description: string;
  createdAtTimestamp: number;
  memberships: IGroupMembership[];
}
