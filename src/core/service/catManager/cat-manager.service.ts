import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, of, retry } from 'rxjs';
import { Card } from '../../model/card.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatManagerService {

  #URL_random_image = "https://cataas.com/cat?json=true";
  #URL_random_gif = "https://cataas.com/cat/gif?json=true";
  #router = inject(Router);
  /**
   * Servizio per le chiamate HTTP
   * @private
   */
  #http = inject(HttpClient);
  /**
   * Lista locale dei post
   * @private
   */
  #catList = signal<Card[]>([]);
  #catListRecovery = signal<Card[]>([]);
  readonly catListComp = computed(() => this.#catList());
  constructor() { }
  /**
   * Recupera i post via HTTP e li salva nella lista locale #postList.
   *
   * Se la richiesta HTTP fallisce, viene restituito un post fittizio con un messaggio di errore.
   * @returns void
   */
  recuperaPostViaHttpImage(): void {
    this.#http.get<Card>(this.#URL_random_image)
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          return of<Card>({
            id: "ERROR",
            tags: [],
            created_at: "",
            url: "",
            mimetype: ""
          });
        })
      )
      .subscribe((catList) => {

        this.#catList.update((list) => [
          ...list,
          {
            ...this.#catList(),
            ...catList
          }
        ]);
      });
  }
  recuperaPostViaHttpGif(): void {
    this.#http.get<Card>(this.#URL_random_gif)
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          return of<Card>({
            id: "ERROR",
            tags: [],
            created_at: "",
            url: "",
            mimetype: ""
          });
        })
      )
      .subscribe((catList) => {

        this.#catList.update((list) => [
          ...list,
          {
            ...this.#catList(),
            ...catList
          }
        ]);
      });
  }
  uploadCat(id: string, tags: string[], url: string, created_at: string, mimetype: string) {
    this.#catList.update((item: Card[]) => {
      return [
        ...item,
        {
          id,
          tags,
          url,
          created_at,
          mimetype
        }
      ];
    });
    this.#router.navigate(['/']);
  }
  generaPost() {
    this.#catList.update((item: Card[]) => {
      return [
        ...item,
        {
          "id": "fuwx2MW0nKAb2For" + item.length,
          "tags": [
            "close"
          ],
          "created_at": "2022-04-21T12:50:42.913Z",
          "url": "https://cataas.com/cat/fuwx2MW0nKAb2For?position=center",
          "mimetype": "image/jpeg"
        },
      ];
    });
  }
  eliminaPost(id: string, recovery: boolean=false){
    // if(recovery){
    //   this.#catList.update(() => {
    //     // console.log(this.#catList().indexOf((p) => p.id !== id))
    //     return this.#catList().filter((p) => p.id == id);
    //   })
    // }else{
    // }
    this.#catList.update(() => {
      return this.#catList().filter((p) => p.id !== id);
    })
  }
}

