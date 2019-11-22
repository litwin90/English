import { Routes } from '@angular/router';
import { MenuItems } from './configs/menu-items';
import { ContentViewComponent } from './content/content-view/content-view.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { HomeComponent } from './content/home/home.component';

export const AppRoutes = MenuItems.map(item => ({
    path: item.routePath,
    component: ContentViewComponent,
    data: { id: item.id },
}));

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'redirect', redirectTo: 'home', pathMatch: 'full' },

    // Redirect to
    { path: 'home', component: HomeComponent },
    // { path: AppRoutes[1], component: AtHomeComponent },
    // { path: AppRoutes[2], component: OnAWalkComponent },
    // { path: AppRoutes[3], component: GamesComponent },
    // { path: AppRoutes[4], component: HolidayComponent },

    ...AppRoutes,

    // Course page
    // { path: 'course/:id', component: CoursePageComponent },

    // 404
    { path: 'notFound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notFound' },
];
