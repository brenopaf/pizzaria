import { EditComponent } from './pages/edit/edit.component';
import { HomePage } from './pages/home/home.page';
import { ListaPage } from './pages/lista/lista.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:HomePage    
  },  
  {
    path: 'lista',
    component:ListaPage
  },
  {
      path:'edit',
      component:EditComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
