import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  walletBalance: number = 1250.75; // example balance

  transactions = [
    { id: 1, description: 'Payment', amount: 50, date: '2024-04-01' },
    { id: 2, description: 'Refund', amount: -20, date: '2024-04-02' },
    { id: 3, description: 'Recharge', amount: 100, date: '2024-04-03' },
    { id: 4, description: 'Bill Payment', amount: -30, date: '2024-04-04' },
    { id: 5, description: 'Gift', amount: 10, date: '2024-04-05' },
    { id: 6, description: 'Subscription', amount: -15, date: '2024-04-06' },
    { id: 7, description: 'Salary', amount: 200, date: '2024-04-07' },
  ];

  get latestTransactions() {
    return this.transactions.slice(0, 5);
  }

  showMore = false;

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
