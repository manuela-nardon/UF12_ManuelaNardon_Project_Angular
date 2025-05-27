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

  #recoveryList = signal<Cat[]>([]);
  readonly recoveryListComp = computed(() => this.#recoveryList());
  constructor() {}

  getCatPost(isImage: boolean = true): void {
    this.#http
      .get<Cat>(isImage ? this.#URL_random_image : this.#URL_random_gif)
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

  addCatPost(newCat: Cat): void {
    this.#catList.update((list) => [...list, newCat]);
  }

  updateCatPost(updatedCat: Cat): void {
    this.#catList.update((list) =>
      list.map((cat) =>
        cat.id === updatedCat.id ? { ...cat, ...updatedCat } : cat
      )
    );
  }

  deleteCatPost(catId: string): void {
    let SadCat : Cat;
    SadCat = this.#catList().filter((cat) => cat.id === catId)[0]
    this.#catList.update((list) => list.filter((cat) => cat.id !== catId));
    this.#recoveryList.update((list) => [...list, SadCat]);
    console.log(this.#recoveryList())

  }

  recoveryCatPost(catId : string) {
    let HappyCat : Cat;
    HappyCat = this.#recoveryList().filter((cat) => cat.id === catId)[0]
    this.#recoveryList.update((list) => list.filter((cat) => cat.id !== catId));
    this.#catList.update((list) => [...list, HappyCat]);
  }
}
