import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling-choise',
  templateUrl: './styling-choise.component.html',
  styleUrls: ['./styling-choise.component.scss']
})
export class StylingChoiseComponent implements OnInit {
    panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
