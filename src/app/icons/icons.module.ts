import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faWalking, faPuzzlePiece, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [CommonModule, FontAwesomeModule],
})
export class IconsModule {
    constructor() {
        library.add(faHome, faWalking, faPuzzlePiece, faBirthdayCake);
    }
}
