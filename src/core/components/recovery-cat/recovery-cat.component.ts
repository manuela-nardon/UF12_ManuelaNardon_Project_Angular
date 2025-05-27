import { Component, inject } from '@angular/core';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';
import { CatCardComponent } from '../cat-card/cat-card.component';

@Component({
  selector: 'app-recovery-cat',
  imports: [CatCardComponent],
  templateUrl: './recovery-cat.component.html',
  styleUrl: './recovery-cat.component.scss'
})
export class RecoveryCatComponent {
  service = inject(CatManagerService)
}
