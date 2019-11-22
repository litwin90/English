import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentViewComponent } from './content-view/content-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ContentViewComponent, NotFoundComponent, HomeComponent],
    imports: [CommonModule, RouterModule],
    exports: [],
})
export class ContentModule {}
