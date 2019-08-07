import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { NotFoundComponent } from './main/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'redirect', redirectTo: 'first', pathMatch: 'full' },

    // Redirect to
    { path: 'first', component: MainComponent },

    // Course page
    // { path: 'course/:id', component: CoursePageComponent },

    // 404
    { path: 'notFound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notFound' },
];
