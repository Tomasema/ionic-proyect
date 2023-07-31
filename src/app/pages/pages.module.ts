// Angular and Ionic Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
// Views
import { HomeComponent, DetailComponent, GalleryComponent } from '@pages/views'
// Shared
import { MenuComponent } from '../shared/component/menu/menu.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations:[
     // Views
     HomeComponent,
     DetailComponent,
     GalleryComponent,
     PagesComponent,
  ],
  imports: [
    // Modules Angular/Ionic
    CommonModule, 
    PagesRoutingModule,
    IonicModule
  ],
  exports: [],
  providers: []
})


export class PagesModule {}
