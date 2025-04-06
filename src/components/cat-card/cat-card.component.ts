import { Component, inject, input } from '@angular/core';
import { Card } from '../../core/model/card.model';
import { CatManagerService } from '../../core/service/catManager/cat-manager.service';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cat-card',
  imports: [CardModule, ImageModule, ButtonModule, TagModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  post = input.required<Card>();
  catManagerService = inject(CatManagerService);
  deletePost(){
    this.catManagerService.eliminaPost(this.post().id, true);
  }
}
