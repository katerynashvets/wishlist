import { Component, signal } from '@angular/core';
import { Collection } from '../../components/collection/collection';
import { CreateCollection } from '../../components/createCollection/createCollection';
import { NavigationAccount } from '../../components/navigation-account/navigation-account';

type CollectionSection = 'All' | 'Upcoming' | 'Past';

@Component({
  selector: 'app-collections',
  imports: [NavigationAccount, Collection, CreateCollection],
  templateUrl: './collections.html',
})
export class Collections {
  readonly section = signal<CollectionSection>('All');
  readonly openModal = signal<boolean>(false);
}
