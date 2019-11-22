import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { MenuTabletComponent } from './menu-tablet/menu-tablet.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { IconsModule } from '../app-common/icons/icons.module';

@NgModule({
    declarations: [MenuDesktopComponent, MenuTabletComponent, MenuMobileComponent],
    imports: [CommonModule, AppCommonModule, IconsModule, RouterModule],
    exports: [MenuDesktopComponent, MenuTabletComponent, MenuMobileComponent],
})
export class MenuModule {}
