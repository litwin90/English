import { Injectable } from '@angular/core';

import { WindowResolution } from '../../app-common/constants';

@Injectable({
    providedIn: 'root',
})
export class ApplicationStateService {
    private windowResolution: WindowResolution;

    constructor() {
        this.updateWindowResolution();
    }

    public updateWindowResolution() {
        if (window.innerWidth < WindowResolution.Mobile) {
            this.windowResolution = WindowResolution.Mobile;
        } else if (window.innerWidth < WindowResolution.Tablet) {
            this.windowResolution = WindowResolution.Tablet;
        } else {
            this.windowResolution = WindowResolution.Desktop;
        }
    }

    public getWindowResolution(): WindowResolution {
        return this.windowResolution;
    }

    public isMobileResolution(): boolean {
        return this.windowResolution === WindowResolution.Mobile;
    }

    public isTabletResolution(): boolean {
        return this.windowResolution === WindowResolution.Tablet;
    }

    public isDesktopResolution(): boolean {
        return this.windowResolution === WindowResolution.Desktop;
    }
}
