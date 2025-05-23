import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from '../../models/cat.model';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatManagerService {
  #URL_random_image: string = 'https://cataas.com/cat?json=true';
  #URL_random_gif: string = 'https://cataas.com/cat/gif?json=true';

  #router = inject(Router);
  #http = inject(HttpClient);

  #catList = signal<Cat[]>([]);
  readonly catListComp = computed(() => this.#catList());

  constructor() {}

  getCatPost(): void {
    this.#http
      .get<Cat>(this.#URL_random_image)
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          return of<Cat>({
            id: 'ERROR',
            tags: [],
            created_at: '',
            url: '',
            mimetype: '',
          });
        })
      )
      .subscribe((catList) => {
        this.#catList.update((list) => [
          ...list,
          {
            ...catList,
          },
        ]);
      });
  }

  addCatPost() {}
  updateCatPost() {}
  deleteCatPost() {}
  recoveryCatPost() {}
}
