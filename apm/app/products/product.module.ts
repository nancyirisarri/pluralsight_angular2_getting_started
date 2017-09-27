import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent  } from './product-list.component';
import { ProductDetailComponent  } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'products/:id', 
            canActivate: [ ProductDetailGuard ],
            component: ProductDetailComponent }    
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    ProductFilterPipe   
  ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class ProductModule {}
