import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
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
    myFormForStyles: FormGroup;


    constructor(private store: Store) { }

    ngOnInit(): void {

        this.myFormForStyles = new FormGroup({
            "color": new FormControl(),
            "backgroundColor": new FormControl(),
            "width": new FormControl(),
            "height": new FormControl(),
            "required": new FormControl(),
            "placeholderText": new FormControl(),
            "border": new FormControl(),
            "fontSize": new FormControl(),
            "text": new FormControl()
        });

        this.currElemStyles$.subscribe(stylesElemFromStore => {
            this.styles = { ...stylesElemFromStore };
        });

        this.panelIsOpened$.subscribe(param => {
            this.openListStyle = param;
        })
    }
    onClick() {

        // if (this.currElemStyles$ === this.myFormForStyles.value) {
            this.store.dispatch(settingStylesToElementAction(this.myFormForStyles.value));

        // }

        //    console.log("MY_FORM_FOR_Styles", this.myFormForStyles.value)
        //    this.store.dispatch(settingStylesToElementAction( this.styles ));
    }
}