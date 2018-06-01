import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Book} from '../book';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../shared/validators/CustomValidator';

@Component({
  selector: 'cyn-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() book: Book = new Book();
  @Output() saveEvent = new EventEmitter();

  bookForm: FormGroup;
  bookModelControl: any;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book.currentValue) {
      if (this.book && this.book.title) {
        this.bookForm.patchValue({title: this.book.title});
      }
      if (this.book && this.book.year) {
        this.bookForm.patchValue({year: this.book.year});
      }
    }
  }

  ngOnInit() {
    this.bookModelControl = {
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}$'), CustomValidator.isOldEnough])
    };
    this.bookForm = this.fb.group(this.bookModelControl);
  }

  save() {
    this.book.title  = this.bookForm.value.title;
    this.book.year  = +this.bookForm.value.year;
    this.saveEvent.emit(this.book);
  }

  onTitleChanges($event) {
    console.log($event);
  }
}
