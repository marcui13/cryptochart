import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoListComponent } from './@components/crypto-list/crypto-list.component';
import { CryptoDetailComponent } from './@components/crypto-detail/crypto-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/crypto-list', pathMatch: 'full' },
  { path: 'crypto-list', component: CryptoListComponent },
  { path: 'crypto-detail', component: CryptoDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
