import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';

@NgModule({
  imports: [ CommonModule,CustomersRoutingModule  ],
  exports: [NewcustomerComponent],
  declarations: [NewcustomerComponent]
})
export class CustomersModule { }
