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
import { PortalModule } from '@angular/cdk/portal';



@NgModule({
  declarations: [
    AppComponent,
    StylingChoiseComponent,
    DragDropComponent,


    
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
    PortalModule
  ],
  providers: [
    // {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
