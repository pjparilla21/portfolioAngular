import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { MatButtonModule } from '@angular/material/button'; // Import Material Button
import { PopUpComponent } from './pop-up/pop-up.component';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,    // For routing
    RouterLink,      // For linking
    CommonModule,    // Import CommonModule here instead of BrowserModule
    MatButtonModule, // Import Material Button module
  ],
  template: `<nav class="bg-black text-white p-4 flex items-center justify-between">
  <ul class="flex space-x-6">
    <li class="flex items-center">
      <span class="material-icons text-white-600 mr-2">home</span>
      <a 
        routerLink="/" 
        class="hover:text-white-500 transition-colors duration-200" 
        routerLinkActive="font-bold">
        Home
      </a>
    </li>
    <li class="flex items-center">
      <span class="material-icons text-white-600 mr-2">build</span>
      <a 
        routerLink="/services" 
        class="hover:text-white-500 transition-colors duration-200" 
        routerLinkActive="font-bold">
        Services
      </a>
    </li>
    <li class="flex items-center">
      <span class="material-icons text-white-600 mr-2">info</span>
      <a 
        routerLink="/about-us" 
        class="hover:text-white-500 transition-colors duration-200" 
        routerLinkActive="font-bold">
        About
      </a>
    </li>
    <li class="flex items-center">
      <span class="material-icons text-white-600 mr-2">contact_mail</span>
      <a 
        routerLink="/contact-us" 
        class="hover:text-white-500 transition-colors duration-200" 
        routerLinkActive="font-bold">
        Contact
      </a>
    </li>
  </ul>

  <div class="flex items-center space-x-4">
  
   

    <!-- Login Button -->
    <button 
      (click)="openDialog()" 
      class="bg-white-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-white-500 transition-all duration-200">
      <span class="material-icons">login</span>
      <span>Login</span>
    </button>
  </div>
</nav>

<router-outlet></router-outlet
  >
<footer class="bg-black text-white py-6">
  <div class="container mx-auto flex flex-col items-center">
    <nav class="flex space-x-6">
      <a href="#" class="text-sm font-medium hover:text-gray-400">Home</a>
      <a href="#" class="text-sm font-medium hover:text-gray-400">Services</a>
      <a href="#" class="text-sm font-medium hover:text-gray-400">About</a>
      <a href="#" class="text-sm font-medium hover:text-gray-400">Contact</a>
    </nav>
    <p class="mt-4 text-xs text-white-500">© 2024 PJ Parilla. All rights reserved.</p>
  </div>
</footer>
`,
  styles: [
    `
      nav {
        background-color: black;
        padding: 1rem;
      }
      nav a {
        color: white;
        margin-right: 1rem;
        text-decoration: none;
        transition: text-decoration-thickness 3s ease, text-decoration-color 3s ease;
      }
      nav a:hover {
  text-decoration: underline;
  text-decoration-thickness: 3px; /* Adjust the thickness as needed */
  text-decoration-color: currentColor; /* Ensures the underline matches the text color */
}
    `,
  ],
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private dialogRef: MatDialog) {}

  // Method to open the login dialog (modal)
  openDialog(): void {
    this.dialogRef.open(PopUpComponent, {
      width: '300px', // Adjust width of the modal as needed
    });
  }
}