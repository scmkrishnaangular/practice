import { Injectable } from '@angular/core';
import { CanActivate ,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanDeactivate,
    Resolve} from '@angular/router';
import { NeworderComponent } from './neworder/neworder.component';

@Injectable({
  providedIn: 'root'
})
export class OrderouletguardService
implements CanActivate,CanDeactivate<NeworderComponent>,Resolve <Order[]>
{

  constructor() { }
 isLogin=true;
    canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean {
        console.log("Can Active Called ..." + route.root + " State " + state.root);

        //user login details take check

        return  this.isLogin;
      }
  
    canDeactivate( component: NeworderComponent, 
                  currentRoute: ActivatedRouteSnapshot, 
                  currentState: RouterStateSnapshot, 
                  nextState?: RouterStateSnapshot): 
                  boolean {
                        console.log("Can DeActive Called ..." );
                        return true ;
                          }
        //give authoziation loading
      resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Order[]{
            console.log("resolve called ...");
          //Can read form DB or form API data will be async
          let orderlist=[
            {orderid : 1, description : "order product 1",orderstatus : "Delivered"},
            {orderid : 123, description : "order product 2",orderstatus : "Order conformed"},
            {orderid : 134, description : "order product 3",orderstatus : "shipped"},
            {orderid : 145, description : "order product 4",orderstatus : "out for delivery"}
          ]
          return orderlist;
        }
}
export class Order
{
  orderid;
  description;
  orderstatus;

}

