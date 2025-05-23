import { Routes } from '@angular/router';
import { CatPostsComponent } from '../core/components/cat-posts/cat-posts.component';

export const routes: Routes = [
  {
    path:'',
    component:CatPostsComponent,
    pathMatch:'full'
  }
];
