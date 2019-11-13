import { HostListener } from '@angular/core';

import { ApplicationStateService } from './application-state.service';

export abstract class ApplicationState {
    constructor(protected applicationStateService: ApplicationStateService) {}

    @HostListener('window:resize')
    onWindowResize() {
        this.applicationStateService.updateWindowResolution();
    }

    public isMobileResolution(): boolean {
        return this.applicationStateService.isMobileResolution();
    }

    public isTabletResolution(): boolean {
        return this.applicationStateService.isTabletResolution();
    }

    public isDesktopResolution(): boolean {
        return this.applicationStateService.isDesktopResolution();
    }
}
