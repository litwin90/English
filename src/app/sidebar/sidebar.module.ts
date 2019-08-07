import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [SidebarComponent, SidebarItemComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [SidebarComponent],
})
export class SidebarModule {}
