import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Component, inject } from '@angular/core';
import { CatManagerService } from '../../core/service/catManager/cat-manager.service';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'app-homepage',
  imports: [CatCardComponent, InputIconModule, IconFieldModule, InputTextModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  catManagerService : CatManagerService = inject(CatManagerService);
}
