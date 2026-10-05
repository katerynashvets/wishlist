import { Component, input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  imports: [],
  templateUrl: './home-card.html',
  styleUrl: './home-card.css',
})
export class HomeCard {
  readonly header = input.required<string>();
  readonly description = input.required<string>();
  readonly isPink = input.required<boolean>();
}
