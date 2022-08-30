import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupDetailsComponent } from './pages/group_details/group_details.component';

import { GroupBoxComponent } from './components/group_box/group_box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupDetailsComponent,

    GroupBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
