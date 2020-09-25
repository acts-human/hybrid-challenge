import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  form: FormGroup;

  @Output()
  username = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.subscriptions.push(
      this.form.get('name').valueChanges.subscribe(() => {
        this.username.emit(this.form.get('name').value);
      })
    );
  }

  ngOnDestroy(): void {
    // Prevent memory leaks
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['']
    });
  }

}
