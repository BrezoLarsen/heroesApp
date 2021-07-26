import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
