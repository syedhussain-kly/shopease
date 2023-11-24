import { Component, OnInit } from '@angular/core';
import { Category, Products } from './products.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: Products[] = [
    { id: 11, name: 'Remote Car', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Toys' },
    { id: 12, name: 'Power of Mind', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Books' },
    { id: 13, name: 'Earphone with Mic', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Electronics' },
    { id: 14, name: 'Atomic Habits', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Books' },
    { id: 15, name: 'Dazzling 3D Car', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Toys' },
    { id: 16, name: 'Smartphone', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Electronics' },
    { id: 17, name: 'Camera', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Electronics' },
    { id: 18, name: 'Trouser', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Cloths' },
    { id: 19, name: 'T-Shirt', price: '$99.00', image: 'assets/images/placeholder.png', category: 'Cloths' }
  ];
  productListClone: Products[] = JSON.parse(JSON.stringify(this.productList));
  categoryList: Category[] = [];
  filterForm: FormGroup = new FormGroup({
    searchText: new FormControl<string>(''),
    filterCategory: new FormControl<string>('')
  });
  filterFormSubsription: Subscription;
  searchText: string = '';

  constructor() {
    this.filterFormSubsription = this.filterForm.controls['searchText'].valueChanges
      .pipe(debounceTime(400)).subscribe(changes => {
        this.searchText = changes;
      });
    this.filterFormSubsription = this.filterForm.controls['filterCategory'].valueChanges
      .subscribe(changes => {
        this.productList = this.productListClone;
        if (changes !== 'All') {
          this.productList = this.productList.filter(product => product.category === changes);
        }
      });
  }

  ngOnInit(): void {
    this.productList.forEach((product, index) => {
      if (!this.categoryList?.some(category => category.label === product.category)) {
        this.categoryList?.push({
          label: product.category,
          value: index
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.filterFormSubsription.unsubscribe();
  }

}
