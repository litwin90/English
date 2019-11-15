import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonDesktopComponent } from './buttons/menu-button-desktop/menu-button-desktop.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [MenuButtonDesktopComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [MenuButtonDesktopComponent],
})
export class ComponentsModule {}
