import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { Cat } from '../../models/cat.model';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';

@Component({
  selector: 'app-cat-card',
  imports: [CardModule, ImageModule, ButtonModule, TagModule, DatePipe, RouterLink],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  service = inject(CatManagerService)

  kitty = input.required<Cat>();
  deletes = input.required<boolean>();
}
