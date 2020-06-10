import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './core/components/views/basic/basic.component';
import { MenuBubbleComponent } from './core/components/views/menu-bubble/menu-bubble.component';
import { FloatingMenuComponent } from './core/components/views/floating-menu/floating-menu.component';


const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'menu-bubble',
    component: MenuBubbleComponent,
  }
  ,
  {
    path: 'floating-menu',
    component: FloatingMenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
