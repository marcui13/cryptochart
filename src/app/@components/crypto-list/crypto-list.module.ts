import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';

import { CryptoListComponent } from './crypto-list.component';

@NgModule({
  declarations: [
    CryptoListComponent
  ],
  imports: [
    CommonModule,
    TagModule
  ],
  exports: [
    CryptoListComponent
  ]
})
export class CryptoListModule { }
