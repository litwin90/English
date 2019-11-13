import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ApplicationStateService } from './services/application-state/application-state.service';
import { ApplicationState } from './services/application-state/application-state';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends ApplicationState {
    constructor(protected applicationStateService: ApplicationStateService) {
        super(applicationStateService);
    }
}
