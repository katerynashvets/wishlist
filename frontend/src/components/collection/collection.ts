import { Component, computed, input } from '@angular/core';

type Tag = 'Upcoming' | 'Past';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  readonly name = input.required<string>();
  readonly img = input<string>();
  readonly date = input.required<string>();
  readonly numberOfGifts = input.required<number>();
  readonly numberOfReserved = input.required<number>();
  readonly numberOfPurchased = input.required<number>();

  readonly tag = computed<Tag>(() => {
    const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(this.date());
    if (!match) {
      return 'Past';
    }

    const [, day, month, year] = match;
    const collectionDate = new Date(Number(year), Number(month) - 1, Number(day));
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return collectionDate >= today ? 'Upcoming' : 'Past';
  });
}
