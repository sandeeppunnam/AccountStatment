import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementModule } from './account-management.module';
import { StatementLandingComponent } from './accountStatement/statement-landing/statement-landing.component';
import { ViewTransactionsComponent } from './accountStatement/view-transactions/view-transactions.component';

const routes: Routes = [
  { path:'',redirectTo:'StatementLandingComponent',pathMatch:'full'},
  {path:'statementLanding',component:StatementLandingComponent},
  {path:'view-transaction',component:ViewTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagementRoutingModule { }
