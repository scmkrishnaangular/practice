import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { NeworderComponent } from './neworder/neworder.component';
import { Router } from '@angular/router';
import { OrderouletguardService } from './orderouletguard.service'
@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    
  ],
  declarations: [OrderlistComponent, NeworderComponent],
  providers : [OrderouletguardService]
})
export class OrderModule { }
