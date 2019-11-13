import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { MenuTabletComponent } from './menu-tablet/menu-tablet.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';

@NgModule({
    declarations: [MenuDesktopComponent, MenuTabletComponent, MenuMobileComponent],
    imports: [CommonModule],
    exports: [MenuDesktopComponent, MenuTabletComponent, MenuMobileComponent],
})
export class MenuModule {}
