import { Component, inject, signal } from '@angular/core';
import { Cat } from '../../models/cat.model';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';
import { ActivatedRoute } from '@angular/router';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-details',
  imports: [TagModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  catService = inject(CatManagerService)
  #routerAct = inject(ActivatedRoute)


  kitty = signal<Cat>(this.catService.catListComp().filter(el => el.id === this.#routerAct.snapshot.paramMap.get('id'))[0]);
  uploaded : UploadWay = (!isNaN(parseInt(this.kitty().id))?'LOCALE':'API');

}
type UploadWay = 'LOCALE' | 'API';

