import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-output',
  templateUrl: './name-output.component.html',
  styleUrls: ['./name-output.component.scss']
})
export class NameOutputComponent implements OnInit {

  @Input()
  firstname: string;

  @Input()
  lastname: string;

  constructor() { }

  ngOnInit(): void {
  }

}
