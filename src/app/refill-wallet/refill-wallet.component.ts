import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-refill-wallet',
  templateUrl: './refill-wallet.component.html',
  styleUrls: ['./refill-wallet.component.css'],
})
export class RefillWalletComponent {
  currentBalance: number = 1250.75; // Example current balance
  maxLimit: number = 5000; // Max allowed refill limit
  refillAmount: number | null = null;

  // Optional: You can add a method to handle form submission
  refill() {
    if (this.refillAmount && this.refillAmount > 0) {
      if (this.refillAmount + this.currentBalance > this.maxLimit) {
        alert(`Cannot exceed max limit of ${this.maxLimit}`);
      } else {
        this.currentBalance += this.refillAmount;
        alert(
          `Wallet refilled successfully! New balance: ${this.currentBalance}`
        );
        this.refillAmount = null; // Reset form
      }
    } else {
      alert('Please enter a valid amount');
    }
  }
}
