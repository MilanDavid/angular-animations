import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { PracticeComponent } from './practice/practice.component';
import { JumpingFrogComponent } from './jumping-frog/jumping-frog.component';

const routes: Routes = [
  {path: '', component: AnimateComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'zippy', component: ZippyComponent},
  {path: 'practice', component: PracticeComponent},
  {path: 'jumping-frog', component: JumpingFrogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
