import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, IconsModule, ComponentsModule],
    exports: [IconsModule, ComponentsModule],
})
export class AppCommonModule {}
