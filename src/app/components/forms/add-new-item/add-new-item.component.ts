import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css'],
})
export class AddNewItemComponent implements OnInit {
  options!: FormGroup;
  item = new FormControl('', Validators.required);
  constructor(fb: FormBuilder, private snackBar: MatSnackBar) {
    this.options = fb.group({
      item: this.item,
    });
  }
  onSubmit() {
    if (this.options.valid) {
      alert(this.item.value);
      this.options.reset();
    } else {
      this.snackBar.open('Form is not Valid', 'Close', { duration: 2000 });
    }
  }
  ngOnInit(): void {}
}
