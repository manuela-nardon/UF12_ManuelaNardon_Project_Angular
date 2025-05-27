import { Router } from '@angular/router';
import { Component, inject, input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadEvent, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CatManagerService } from '../../services/cat-manager/cat-manager.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { Cat } from '../../models/cat.model';

interface ITag {
  name: string;
}

@Component({
  selector: 'app-upload-kitty',

  imports: [
    FileUpload,
    ToastModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
  ],
  providers: [MessageService],
  templateUrl: './upload-kitty.component.html',
  styleUrl: './upload-kitty.component.scss',
})
export class UploadKittyComponent {
  catService = inject(CatManagerService);
  tags: ITag[] = [];
  constructor(private messageService: MessageService) {}
  selectedTags!: ITag[];

  ngOnInit() {
    this.tags = [
      { name: 'Funny' },
      { name: 'Meme' },
      { name: 'Cute' },
      { name: 'Hungry' },
      { name: 'Fat' },
      { name: 'Fluffy' },
    ];
  }
  #router = inject(Router);

  onUpload(event: FileUploadEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });

    let tmp: string[] = [];

    this.selectedTags.forEach((element) => {
      tmp.push(element.name);
    });

    let fr = new FileReader();
    fr.readAsDataURL(event.files[0]);
    fr.onload = () => {
      if (fr.result) {
        let date = new Date().toJSON();
        this.catService.addCatPost({
          id: '' + this.catService.catListComp().length,
          tags: tmp,
          url: fr.result.toString(),
          created_at: date,
          mimetype: 'image',
        });
        this.#router.navigate(['']);
      } else {
        console.error('erroreeee!');
      }
    };
  }
}
