import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from "./core/core.module";
import { HeaderComponent } from './core/components/header/header.component';
import { XfooterComponent } from './core/components/xfooter/xfooter.component';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    XfooterComponent,
    MenuComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
