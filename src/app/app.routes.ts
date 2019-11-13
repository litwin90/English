import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: 'first', pathMatch: 'full' },
    { path: 'redirect', redirectTo: 'first', pathMatch: 'full' },

    // Redirect to
    // { path: 'first', component: MainComponent },

    // Course page
    // { path: 'course/:id', component: CoursePageComponent },

    // 404
    // { path: 'notFound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notFound' },
];
