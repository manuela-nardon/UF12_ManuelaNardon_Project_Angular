import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'
import { CatManagerService } from '../core/services/cat-manager/cat-manager.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  service = inject(CatManagerService)
}
