import { Component, Input, HostBinding, OnInit } from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}