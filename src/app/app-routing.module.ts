import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  { path: 'some', loadChildren: './someComponents/my.module#MyModule'},
  { path: '**', component: LoaderComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
