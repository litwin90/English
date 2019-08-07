import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeLogoComponent } from './fake-logo/fake-logo.component';
import { MinuteToHoursPipe } from './pipes/minute-to-hours.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [FakeLogoComponent, MinuteToHoursPipe],
    imports: [CommonModule, FontAwesomeModule],
    exports: [FakeLogoComponent, MinuteToHoursPipe],
})
export class AppCommonModule {}
