import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


const routes: Routes = [
  { path: 'test1', component: Component1Component },
  { path: 'test2', component: Component2Component },
  { path: '', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Component1Component,
    Component2Component
  ]
})
export class MyModule { }
