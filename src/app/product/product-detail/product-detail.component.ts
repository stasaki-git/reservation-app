import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSerice } from '../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductSerice
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productObservable = this.productService.getProductById(params.get('productId'))
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
    })
  }

}
