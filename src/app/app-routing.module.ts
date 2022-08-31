import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupDetailsComponent } from './pages/group_details/group_details.component';
import { NewExpenseComponent } from './pages/new_expense/new_expense.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'groups/:id',
    component: GroupDetailsComponent,
  },
  {
    path: 'groups/:groupId/expenses/new',
    component: NewExpenseComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
