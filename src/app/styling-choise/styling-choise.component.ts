import { Component, OnInit } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-styling-choise',
  templateUrl: './styling-choise.component.html',
  styleUrls: ['./styling-choise.component.scss']
})
export class StylingChoiseComponent implements OnInit {
    items = ['Form general styling', 'Field styling'];
    expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
