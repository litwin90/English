import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { CourceControlsComponent } from './cource-controls/cource-controls.component';
import { AppCommonModule } from '../common/common.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';

@NgModule({
    declarations: [MainComponent, BreadCrumbsComponent, CourceControlsComponent, CoursesListComponent, CourseComponent],
    imports: [CommonModule, AppCommonModule],
    exports: [MainComponent],
})
export class MainModule {}
