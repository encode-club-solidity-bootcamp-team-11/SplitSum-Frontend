import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'new-expense',
  templateUrl: './new_expense.component.html',
  styleUrls: ['./new_expense.component.scss'],
})
export class NewExpenseComponent implements OnInit {
  groupId!: string;
  expenseAmount?: number;
  expenseDescription?: string;
  expenseMembers: string[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('groupId')!;
    console.log(this.route.snapshot.paramMap);
    console.log(this.groupId);
  }

  async onClickSubmit() {
    const result = await this.apiService.createExpense(
      this.groupId,
      this.expenseAmount!,
      this.expenseDescription!,
      this.expenseMembers
    );

    if (result) {
      this.router.navigate(['groups/:id', { id: this.groupId }]);
    }
  }
}
