// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
// Views
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { GalleryComponent } from './views/gallery/gallery.component';
// Shared
import { MenuComponent } from '../shared/component/menu/menu.component';

@NgModule({
  declarations:[
     // Views
     HomeComponent,
     DetailComponent,
     GalleryComponent,
  ],
  imports: [
    // Modules Angular/Ionic
    CommonModule, 
    PagesRoutingModule
  ],
  exports: [],
  providers: []
})


export class PagesModule {}
