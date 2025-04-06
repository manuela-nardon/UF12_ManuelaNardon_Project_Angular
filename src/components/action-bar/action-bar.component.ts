import { CatManagerService } from './../../core/service/catManager/cat-manager.service';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-action-bar',
  imports: [ButtonModule, RouterLink],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  catManagerSrv = inject(CatManagerService);
}
