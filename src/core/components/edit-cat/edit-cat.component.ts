import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, input, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Cat } from '../../models/cat.model';


interface ITag {
  name: string
}

@Component({
  selector: 'app-edit-cat',
  imports: [ToastModule, ButtonModule, MultiSelectModule, FormsModule],
  providers: [MessageService],
  templateUrl: './edit-cat.component.html',
  styleUrl: './edit-cat.component.scss'
})
export class EditCatComponent {
  catService = inject(CatManagerService);

  tags: ITag[] = [];
  #router = inject(Router)
  #routerAct = inject(ActivatedRoute)
  kitty = signal<Cat>(this.catService.catListComp().filter(el => el.id === this.#routerAct.snapshot.paramMap.get('id'))[0]);
  selectedTags!: ITag[];

  constructor(private messageService: MessageService) {
    this.tags = [
      { name: 'Funny' },
      { name: 'Meme' },
      { name: 'Cute' },
      { name: 'Hungry' },
      { name: 'Fat' },
      { name: 'Fluffy' }
    ];

    this.selectedTags = this.kitty().tags.map(name => this.tags.find(tag => tag.name === name)).filter((tag): tag is ITag => tag !== undefined);
  }

  upload() {
    let tmp: string[] = []

    this.selectedTags.forEach(element => {
      tmp.push(element.name)
    });
    let date = new Date().toJSON();
    this.catService.updateCatPost(
      {
        id: this.kitty().id,
        tags: tmp,
        url: this.kitty().url,
        created_at: date,
        mimetype: 'image'
      }
    );
    this.#router.navigate([''])
  }
}

