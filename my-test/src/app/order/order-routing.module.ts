import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NeworderComponent } from './neworder/neworder.component';
import { OrderlistComponent } from './orderlist/orderlist.component'
import { OrderouletguardService } from './orderouletguard.service'
const routes: Routes = [{ path : "" , component : NeworderComponent,
                          canActivate : [OrderouletguardService],
                          canDeactivate : [OrderouletguardService],
                          
                      children : [{ path : "oderlist", component : OrderlistComponent,
                                    resolve : {orderlist :OrderouletguardService }             
                                    }]
                      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class OrderRoutingModule { }
