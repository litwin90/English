import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { IconsModule } from './icons/icons.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HeaderModule, FooterModule, MainModule, IconsModule, SidebarModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
