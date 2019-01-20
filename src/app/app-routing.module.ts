import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimateComponent } from './animate/animate.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';

const routes: Routes = [
  {path: '', component: AnimateComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'zippy', component: ZippyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
