import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { ScanQaComponent } from './scan-qa/scan-qa.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RefillWalletComponent } from './refill-wallet/refill-wallet.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TransactionHistoryComponent,
    AddMoneyComponent,
    ScanQaComponent,
    RefillWalletComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ZXingScannerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
