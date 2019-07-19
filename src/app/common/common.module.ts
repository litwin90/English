import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [FakeLogoComponent, SearchInputComponent, ButtonComponent],
    imports: [CommonModule],
    exports: [FakeLogoComponent, SearchInputComponent, ButtonComponent],
})
export class AppCommonModule {}
