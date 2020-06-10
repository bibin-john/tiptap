import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './components/views/basic/basic.component';
import { MenuBubbleComponent } from './components/views/menu-bubble/menu-bubble.component';
import { FloatingMenuComponent } from './components/views/floating-menu/floating-menu.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReadonlyComponent } from './components/views/readonly/readonly.component';
import { TrailingParagraphComponent } from './components/views/trailing-paragraph/trailing-paragraph.component';
@NgModule({
  declarations: [ BasicComponent, MenuBubbleComponent, FloatingMenuComponent, ReadonlyComponent, TrailingParagraphComponent],
  imports: [
    CommonModule,
    CKEditorModule
  ],
  exports: [],
  entryComponents: [],
  providers: []
})
export class CoreModule { }