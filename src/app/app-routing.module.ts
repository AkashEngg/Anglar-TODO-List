import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: '', component: TodosComponent },
  { path: 'item', component: TodoItemComponent },
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'dash', component: DashboardComponent },

  // {
  // path: 'dash',
  // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // },

  // { path: '**', component: LoginComponent },

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
