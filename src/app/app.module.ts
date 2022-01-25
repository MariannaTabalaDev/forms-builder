import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StylingChoiseComponent } from './components/styling-choise/styling-choise.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';


import { DragDropModule } from '@angular/cdk/drag-drop';

import { ReactiveFormsModule } from '@angular/forms';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { StoreModule } from '@ngrx/store';
import { TextareaElemComponent } from './components/textarea-elem/textarea-elem.component';
import { TextElemComponent } from './components/text-elem/text-elem.component';
import { ButtonElemComponent } from './components/button-elem/button-elem.component';
import { SelectElemComponent } from './components/select-elem/select-elem.component';
import { CheckboxElemComponent } from './components/checkbox-elem/checkbox-elem.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { appReducers, metaReducers } from '../app/store/reducers';


@NgModule({
    declarations: [
        AppComponent,
        StylingChoiseComponent,
        DragDropComponent,
        TextareaElemComponent,
        TextElemComponent,
        ButtonElemComponent,
        SelectElemComponent,
        CheckboxElemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        CdkAccordionModule,
        MatSliderModule,
        MatInputModule,
        DragDropModule,
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([]),
    ],
    providers: [
        // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
