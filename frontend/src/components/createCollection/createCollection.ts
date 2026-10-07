import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface CreateCollectionFormModel {
  title: string;
  img: string;
  date: string;
}

@Component({
  selector: 'create-collection',
  imports: [FormField],
  templateUrl: './createCollection.html',
})
export class CreateCollection {
  createCollectionModel = signal<CreateCollectionFormModel>({
    title: '',
    img: '',
    date: '',
  });

  createCollectionForm = form(this.createCollectionModel);

  async onSubmit() {
    const formData = this.createCollectionModel();
    console.log(formData.title, formData.date);
  }
}
