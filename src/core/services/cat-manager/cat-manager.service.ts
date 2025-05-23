import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatManagerService {
  #URL_random_image : string = "https://cataas.com/cat?json=true";
  #URL_random_gif : string = "https://cataas.com/cat/gif?json=true";

  #router = inject(Router);

  #catList = signal<any[]>([]);
  readonly catListComp = computed(() => this.#catList());


  constructor() { }
}
