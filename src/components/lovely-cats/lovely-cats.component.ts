import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadEvent, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CatManagerService } from '../../core/service/catManager/cat-manager.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

// interface UploadEvent extends FileUploadEvent{
//   originalEvent: Event;
//   files: File[];
// }
interface ITag{
  name: string
}
@Component({
  selector: 'app-lovely-cats',
  imports: [FileUpload, ToastModule, ButtonModule, MultiSelectModule, FormsModule],
  providers: [MessageService],
  templateUrl: './lovely-cats.component.html',
  styleUrl: './lovely-cats.component.scss'
})
export class LovelyCatsComponent {
  catService = inject(CatManagerService);
  tags: ITag[] = [];
  constructor(private messageService: MessageService){}

    

    selectedTags!: ITag[];

    ngOnInit() {
      this.tags = [
        { name: 'Funny' },
        { name: 'Meme' },
        { name: 'Cute' },
        { name: 'Hungry' },
        { name: 'Fat' },
        { name: 'Fluffy' }
      ];
    }
    

  onUpload(event: FileUploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });


    let tmp: string[] = []

    this.selectedTags.forEach(element => {
      tmp.push(element.name)
    });

    let fr = new FileReader()
    fr.readAsDataURL(event.files[0])
    fr.onload = ()=>{
      if(fr.result){
        let date = new Date().toJSON();
        this.catService.uploadCat(''+this.catService.catListComp().length, tmp, fr.result.toString(), date, 'image');
      }else{
        console.error('erroreeee!')
      }
    }
  }
  upload(){
    //
    console.log('ciao')
  }
}
