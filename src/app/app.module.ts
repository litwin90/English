import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './app-common/icons/icons.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, IconsModule, MenuModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
