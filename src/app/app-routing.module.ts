import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './core/components/views/basic/basic.component';
import { MenuBubbleComponent } from './core/components/views/menu-bubble/menu-bubble.component';
import { FloatingMenuComponent } from './core/components/views/floating-menu/floating-menu.component';
import { ReadonlyComponent } from './core/components/views/readonly/readonly.component';
import { TrailingParagraphComponent } from './core/components/views/trailing-paragraph/trailing-paragraph.component';


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
  ,
  {
    path: 'readonly',
    component: ReadonlyComponent,
  }
  ,
  {
    path: 'trailing-paragraph',
    component: TrailingParagraphComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
