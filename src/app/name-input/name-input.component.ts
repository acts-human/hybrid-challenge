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
  firstname = new EventEmitter<string>();

  @Output()
  lastname = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.subscriptions.push(
      this.form.get('firstname').valueChanges.subscribe(() => {
        this.firstname.emit(this.form.get('firstname').value);
      }),
      this.form.get('lastname').valueChanges.subscribe(() => {
        this.lastname.emit(this.form.get('lastname').value);
      })
    );
  }

  ngOnDestroy(): void {
    // Prevent memory leaks
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  createForm(): void {
    this.form = this.fb.group({
      firstname: [''],
      lastname: ['']
    });
  }

}
