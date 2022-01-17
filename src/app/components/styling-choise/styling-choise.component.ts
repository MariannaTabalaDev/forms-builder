import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-styling-choise',
  templateUrl: './styling-choise.component.html',
  styleUrls: ['./styling-choise.component.scss']
})
export class StylingChoiseComponent implements OnInit {
    panelOpenState = false;


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
