import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-container',
  templateUrl: './index-container.component.html',
  styleUrls: ['./index-container.component.scss']
})
export class IndexContainerComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit(): void {
  }

  onNameChange(e: string): void {
    this.name = e;
  }
}
