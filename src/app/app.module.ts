import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './common/common.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AppCommonModule, HeaderModule, FooterModule, CommonModule, MainModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
