import { Component, inject } from '@angular/core';
import { CatCardComponent } from '../cat-card/cat-card.component';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';

@Component({
  selector: 'app-cat-posts',
  imports: [CatCardComponent],
  templateUrl: './cat-posts.component.html',
  styleUrl: './cat-posts.component.scss'
})
export class CatPostsComponent {
  service = inject(CatManagerService)
}
