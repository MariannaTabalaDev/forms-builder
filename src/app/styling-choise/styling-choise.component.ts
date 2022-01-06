import { Component, OnInit } from '@angular/core';
import { DragService } from '../shared/drag.service';

@Component({
  selector: 'app-styling-choise',
  templateUrl: './styling-choise.component.html',
  styleUrls: ['./styling-choise.component.scss']
})
export class StylingChoiseComponent implements OnInit {
    panelOpenState = false;

  constructor(public dragService: DragService) { }

  ngOnInit(): void {
  }

}
