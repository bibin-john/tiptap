 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/views/basic/basic.component';
import { MenuBubbleComponent } from './components/views/menu-bubble/menu-bubble.component';
import { FloatingMenuComponent } from './components/views/floating-menu/floating-menu.component';

@NgModule({
  declarations: [ BasicComponent, MenuBubbleComponent, FloatingMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [],
  entryComponents: [],
  providers: []
})
export class CoreModule { }