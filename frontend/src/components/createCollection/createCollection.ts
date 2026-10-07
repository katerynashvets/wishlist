import { Component, model, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface CreateCollectionFormModel {
  title: string;
  img: string;
  date: string;
}

@Component({
  selector: 'create-collection',
  imports: [FormField, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './createCollection.html',
})
export class CreateCollection {
  readonly openModal = model<boolean>(false);
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
