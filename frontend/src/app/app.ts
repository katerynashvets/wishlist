import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeCard } from '../components/home-card/home-card';
import { Navigation } from '../components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, HomeCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('wishlist-frontend');
}
