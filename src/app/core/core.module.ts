import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/views/basic/basic.component';
import { MenuBubbleComponent } from './components/views/menu-bubble/menu-bubble.component';
import { FloatingMenuComponent } from './components/views/floating-menu/floating-menu.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [ BasicComponent, MenuBubbleComponent, FloatingMenuComponent],
  imports: [
    CommonModule,
    CKEditorModule
  ],
  exports: [],
  entryComponents: [],
  providers: []
})
export class CoreModule { }