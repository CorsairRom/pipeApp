import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPagesComponent } from './pages/numbers-pages/numbers-pages.component';
import { UnCommonPagesComponent } from './pages/un-common-pages/un-common-pages.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPagesComponent
  },
  {
    path: 'uncommon',
    component: UnCommonPagesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }