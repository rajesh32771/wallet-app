import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent {
  transactions = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    description: `Transaction ${i + 1}`,
    amount: (Math.random() * 100 - 50).toFixed(2),
  }));
  page = 1;
  pageSize = 10;

  get pagedTransactions() {
    const start = (this.page - 1) * this.pageSize;
    return this.transactions.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.transactions.length / this.pageSize);
  }

  nextPage() {
    if (this.page < this.totalPages()) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
}
