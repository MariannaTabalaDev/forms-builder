import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StylingChoiseComponent } from './styling-choise/styling-choise.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule} from '@angular/material/input';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { StoreModule } from '@ngrx/store';
import { TextareaElemComponent } from './textarea-elem/textarea-elem.component';
import { TextElemComponent } from './text-elem/text-elem.component';
import { ButtonElemComponent } from './button-elem/button-elem.component';
import { SelectElemComponent } from './select-elem/select-elem.component';
import { CheckboxElemComponent } from './checkbox-elem/checkbox-elem.component';




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
    CdkAccordionModule,
    MatSliderModule,
    MatInputModule,
    DragDropModule,
    MatExpansionModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
