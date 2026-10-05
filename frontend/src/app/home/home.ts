import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeCard } from '../../components/home-card/home-card';
import { Navigation } from '../../components/navigation/navigation';

@Component({
  selector: 'app-home',
  imports: [Navigation, HomeCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly title = signal('wishlist-frontend');
}
