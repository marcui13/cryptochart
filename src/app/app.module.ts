import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoListComponent } from './@components/crypto-list/crypto-list.component';
import { CryptoDetailComponent } from './@components/crypto-detail/crypto-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CryptoListComponent,
    CryptoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TagModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
