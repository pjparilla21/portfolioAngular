import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common'; // Import CommonModule instead of BrowserModule
import { FormsModule } from '@angular/forms'; // For two-way data binding
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-pop-up',
  standalone: true,  // Define it as a standalone component
  imports: [
    MatDialogModule,
    CommonModule,     // Use CommonModule instead of BrowserModule
    FormsModule,      // Required for two-way data binding
    MatFormFieldModule,
    MatInputModule,   // Import Material Input module
    MatIconModule,    // Import Material
  ],
  template: `<!-- Modal Title -->
  <h2 mat-dialog-title class="text-center text-xl font-semibold text-white">
    {{ isRegistering ? 'Sign Up' : 'Login' }}
    <button mat-icon-button (click)="onCancel()" class="absolute top-2 right-2">
        <mat-icon>close</mat-icon>
    </button>
  </h2>
  
  <!-- Login Modal -->
  <mat-dialog-content *ngIf="!isRegistering" class="bg-white-800 p-6 rounded-lg">
    <form (ngSubmit)="onLogin()" class="space-y-6">
        <mat-form-field appearance="outline" class="w-full">
            <input matInput [(ngModel)]="email" name="email" placeholder="Email" required 
                class="py-3 px-4 border-white-600 text-white bg-white-700 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </mat-form-field>
        
        <mat-form-field appearance="outline" class="w-full">
            <input matInput [(ngModel)]="password" name="password" type="password" placeholder="Password" required 
                class="py-3 px-4 border-white-600 text-white bg-white-700 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </mat-form-field>
    </form>
  </mat-dialog-content>
  
  <mat-dialog-actions *ngIf="!isRegistering" class="justify-between bg-white-700 p-4 rounded-b-lg">
    <button mat-button (click)="onRegister()" class="text-blue-500 hover:text-blue-400 mr-3">SignUp</button>
    <button mat-button (click)="onLogin()" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md transition-all duration-200">Login</button>
  </mat-dialog-actions>
  
  <!-- Register Modal -->
  <mat-dialog-content *ngIf="isRegistering" class="bg-white-800 p-6 rounded-lg">
    <form (ngSubmit)="onRegisterSubmit()" class="space-y-6">
        <mat-form-field appearance="outline" class="w-full">
            <input matInput [(ngModel)]="email" name="email" placeholder="Email" required 
                class="py-3 px-4 border-white-600 text-white bg-white-700 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </mat-form-field>
        
        <mat-form-field appearance="outline" class="w-full">
            <input matInput [(ngModel)]="password" name="password" type="password" placeholder="Password" required 
                class="py-3 px-4 border-white-600 text-white bg-white-700 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </mat-form-field>
        
        <mat-form-field appearance="outline" class="w-full">
            <input matInput [(ngModel)]="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" required 
                class="py-3 px-4 border-white-600 text-white bg-white-700 rounded-md focus:ring-blue-500 focus:border-blue-500" />
        </mat-form-field>
    </form>
  </mat-dialog-content>
  
  <mat-dialog-actions *ngIf="isRegistering" class="justify-between bg-white-700 p-4 rounded-b-lg">
    <button mat-button (click)="onBackToLogin()" class="text-blue-500 hover:text-blue-400 mr-3">Back to Login</button>
    <button mat-button (click)="onRegisterSubmit()" class="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md transition-all duration-200">Register</button>
  </mat-dialog-actions>
  `,
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isRegistering: boolean = false;

  constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}

  // Method to handle login form submission
  onLogin(): void {
    if (this.email && this.password) {
      console.log('Login successful', { email: this.email, password: this.password });
      this.dialogRef.close(); // Close the modal on success
    } else {
      console.error('Please enter valid credentials');
    }
  }

  // Method to handle register form submission
  onRegisterSubmit(): void {
    if (this.password === this.confirmPassword) {
      console.log('Registration successful', { email: this.email, password: this.password });
      this.dialogRef.close(); // Close the modal on success
    } else {
      console.error('Passwords do not match');
    }
  }

  // Switch to the Register modal
  onRegister(): void {
    this.isRegistering = true;
  }

  // Switch back to the Login modal
  onBackToLogin(): void {
    this.isRegistering = false;
  }

  // Method to close the modal
  onCancel(): void {
    this.dialogRef.close();
  }
}
