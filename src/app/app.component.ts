import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'
import { CatPostsComponent } from '../core/components/cat-posts/cat-posts.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, RouterLink, CatPostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
