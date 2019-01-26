import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ButtonHoverComponent } from './button-hover/button-hover.component';
import { PracticeComponent } from './practice/practice.component';
import { JumpingFrogComponent } from './jumping-frog/jumping-frog.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    TodosComponent,
    ZippyComponent,
    ButtonHoverComponent,
    PracticeComponent,
    JumpingFrogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
