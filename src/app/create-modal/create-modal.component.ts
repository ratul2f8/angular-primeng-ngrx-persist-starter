import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ElementRef,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTutorial } from '../ngrx/actions/tutorial.action';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  imageUrl = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
  ]);
  url = new FormControl('', [Validators.required, Validators.minLength(13)]);
  description = new FormControl('', [Validators.required, Validators.minLength(20)]);

  @Output()
  closeModalEvent = new EventEmitter();

  constructor(private elementRef: ElementRef, private store: Store) {}

  ngOnInit(): void {}
  ngOnDestroy() {}

  createTutorial() {
    this.store.dispatch(
      new AddTutorial({
        description: this.description.value,
        imageUrl: this.imageUrl.value,
        name: this.name.value,
        url: this.url.value,

      })
    );
    this.name.setValue('');
    this.imageUrl.setValue('');
    this.url.setValue('');
    this.description.setValue('');
    this.triggerCloseModalEvent();
  }
  triggerCloseModalEvent() {
    this.closeModalEvent.emit();
  }
}
