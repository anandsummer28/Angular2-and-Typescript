import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GrandParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
