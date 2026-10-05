import { Component, signal } from '@angular/core';
import { HomeCard } from '../../components/home-card/home-card';
import { Navigation } from '../../components/navigation/navigation';

@Component({
  selector: 'app-home',
  imports: [Navigation, HomeCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('wishlist-frontend');
}
