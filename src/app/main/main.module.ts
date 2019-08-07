import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainComponent } from './main/main.component';
import { AppCommonModule } from '../common/common.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [MainComponent, NotFoundComponent],
    imports: [CommonModule, AppCommonModule, AppRoutingModule, FontAwesomeModule],
    exports: [MainComponent],
})
export class MainModule {}
