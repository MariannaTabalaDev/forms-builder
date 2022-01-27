import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { settingStylesToElementAction } from 'src/app/store/actions/drag-drop.actions';
import { Styles } from 'src/app/store/drag-drop.interfaces';
import { Selectors } from 'src/app/store/selectors/drag-drop.selectors';

@Component({
    selector: 'app-styling-choise',
    templateUrl: './styling-choise.component.html',
    styleUrls: ['./styling-choise.component.scss']
})
export class StylingChoiseComponent implements OnInit {

    panelOpenState = false;
    currElemStyles$ = this.store.select(Selectors.currElemStylesSelector);
    panelIsOpened$ = this.store.select(Selectors.panelIsOpenedSelector);

    styles: Styles = {};
    openListStyle = false;


    constructor(private store: Store) { }

    ngOnInit(): void {
        this.currElemStyles$.subscribe(stylesElemFromStore => {

            this.styles = { ...stylesElemFromStore };
            // console.log("this styles", this.styles)
        });
        this.panelIsOpened$.subscribe(param => {

            this.openListStyle = param;
        })
    }
    onClick(){
        this.store.dispatch(settingStylesToElementAction( this.styles ));
    }
}