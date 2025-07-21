import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { ScanQaComponent } from './scan-qa/scan-qa.component';
import { RefillWalletComponent } from './refill-wallet/refill-wallet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionHistoryComponent },
  { path: 'add-money', component: AddMoneyComponent },
  { path: 'scan-qa', component: ScanQaComponent },
  { path: 'refill-wallet', component: RefillWalletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
