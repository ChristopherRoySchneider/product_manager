import { ViewSingleProductComponent } from './view-single-product/view-single-product.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AuthorsComponent } from './authors/authors.component';
// import { AlphaComponent } from './alpha/alpha.component';
// import { BetaComponent } from './beta/beta.component';
// import { GammaComponent } from './gamma/gamma.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { SplashComponent } from './splash/splash.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: SplashComponent },
  { path: 'marketplace',

    component: MarketplaceComponent,
    children: [

      { path: '', pathMatch: 'full', component: ViewAllProductsComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'view/:id', component: ViewSingleProductComponent }
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
