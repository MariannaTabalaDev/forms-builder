import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StylingChoiseComponent } from './styling-choise/styling-choise.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSliderModule } from '@angular/material/slider';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DraggableFieldsComponent } from './draggable-fields/draggable-fields.component';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    StylingChoiseComponent,
    FormBuilderComponent,
    DraggableFieldsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    MatSliderModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [
    // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
