import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './filter.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
