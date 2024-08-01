import { BrowserModule, provideClientHydration, } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserModule,
   
    HttpClientModule,

    MatCardModule,
    MatButtonModule
  ],
  providers: [provideClientHydration(),
    provideHttpClient(withFetch())
  ],

  exports: [
    MatGridListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
     MatButtonModule

  ],
})
export class ModulosExternosModule {}
