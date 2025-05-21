import { Component } from '@angular/core';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'app-cat-posts',
  imports: [CatCardComponent],
  templateUrl: './cat-posts.component.html',
  styleUrl: './cat-posts.component.scss'
})
export class CatPostsComponent {

}
