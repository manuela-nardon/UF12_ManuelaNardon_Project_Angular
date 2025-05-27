import { Routes } from '@angular/router';
import { CatPostsComponent } from '../core/components/cat-posts/cat-posts.component';
import { UploadKittyComponent } from '../core/components/upload-kitty/upload-kitty.component';

export const routes: Routes = [
  {
    path:'',
    component: CatPostsComponent,
    pathMatch:'full'
  },
  {
    path:'uploadKitty',
    component:UploadKittyComponent
  }
];
