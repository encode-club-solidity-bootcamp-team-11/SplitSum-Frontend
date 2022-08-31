import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupDetailsComponent } from './pages/group_details/group_details.component';
import { NewExpenseComponent } from './pages/new_expense/new_expense.component';

import { GroupBoxComponent } from './components/group_box/group_box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupDetailsComponent,
    NewExpenseComponent,

    GroupBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
