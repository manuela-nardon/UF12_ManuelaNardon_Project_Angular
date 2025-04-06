import { LovelyCatsComponent } from '../components/lovely-cats/lovely-cats.component';
import { SelectKittyComponent } from '../components/select-kitty/select-kitty.component';
import { HomepageComponent } from './../components/homepage/homepage.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path:'aggiungi-immagine',
        component: LovelyCatsComponent
    },
    {
        path:'seleziona-immagine',
        component: SelectKittyComponent
    }
];
