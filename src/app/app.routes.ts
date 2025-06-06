import { Routes } from '@angular/router';
import { CatPostsComponent } from '../core/components/cat-posts/cat-posts.component';
import { UploadKittyComponent } from '../core/components/upload-kitty/upload-kitty.component';
import { RecoveryCatComponent } from '../core/components/recovery-cat/recovery-cat.component';
import { EditCatComponent } from '../core/components/edit-cat/edit-cat.component';
import { DetailsComponent } from '../core/components/details/details.component';

export const routes: Routes = [
  {
    path:'',
    component: CatPostsComponent,
    pathMatch:'full'
  },
  {
    path:'upload-kitty',
    component:UploadKittyComponent
  },
  {
    path:'edit-kitty/:id',
    component:EditCatComponent
  },
  {
    path:'details-kitty/:id',
    component:DetailsComponent
  },
  {
    path:'recovery-kitty',
    component:RecoveryCatComponent
  }
];
