import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { Cat } from '../../models/cat.model';

@Component({
  selector: 'app-cat-card',
  imports: [CardModule, ImageModule, ButtonModule, TagModule, DatePipe, RouterLink],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  kitty = input.required<Cat>();
}
