import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

interface RegisterData {
  username: string;
  password: string;
  repeatPassword: string;
}

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormField],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected readonly title = signal('wishlist-frontend');

  registerModel = signal<RegisterData>({
    username: '',
    password: '',
    repeatPassword: '',
  });

  registerForm = form(this.registerModel);
}
