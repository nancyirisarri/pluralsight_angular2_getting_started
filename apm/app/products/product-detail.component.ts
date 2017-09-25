import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  moduleId: module.id,    
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
    
  constructor(private _route: ActivatedRoute,
              private _router: Router) { 
  }

  ngOnInit() {
      //let id = +this._route.snapshot.paramMap.get('id');
      let id = +this._route.snapshot.params['id'];
      this.pageTitle += `: ${id}`;
      this.product = {
        "productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "price": 19.95,
        "description": "Leaf rake with 48-inch wooden handle.",
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"          
      }
  }
    
  onBack(): void {
      this._router.navigate(['/products']);
  }

}
