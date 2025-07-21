import { Component } from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css'],
})
export class AddMoneyComponent {
  amount: number = 0;

  addMoney() {
    alert(`Added ${this.amount} to your wallet`);
    this.amount = 0;
  }
}
