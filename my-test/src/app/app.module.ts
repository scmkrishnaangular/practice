import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersModule } from './customer/customers.module';
import { LoginComponent } from './login/login.component'
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';
import { DatatablesampleComponent } from './datatablesample/datatablesample.component';
import { HospitalviewComponent } from './hospitalview/hospitalview.component';
import { DepartmentviewComponent } from './departmentview/departmentview.component';
import { FilterPipe } from './departmentview/filter.pipe';
import { Sample1Component } from './animations/sample1/sample1.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Sample2Component } from './animations/sample2/sample2.component';
import { Sample3keyframesComponent } from './animations/sample3keyframes/sample3keyframes.component';
import { SamplestaggerComponent } from './animations/samplestagger/samplestagger.component';
import { ServicesampleComponent } from './animations/servicesample/servicesample.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { ManageComponent } from './manage/manage.component';
import { NumberonlyDirective } from './numberonly.directive';
import { AlphanumberonlyDirective } from './alphanumberonly.directive';
import { DroupdownComponent } from './droupdown/droupdown.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


const routes  = [
  {path : "" , component : LoginComponent},
  // {pat.,h : '', component : HospitalviewComponent },
  {path : "departmentview", component : DepartmentviewComponent},
  { path: "newcust", loadChildren: "./customer/customers.module#CustomersModule"  },
  { path: "neworder", loadChildren : "./order/order.module#OrderModule"},
  { path: 'register', component: RegisterComponent},
  { path: 'manage', component: ManageComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatatablesampleComponent,
    HospitalviewComponent,
    DepartmentviewComponent,
    FilterPipe,
    Sample1Component,
    Sample2Component,
    Sample3keyframesComponent,
    SamplestaggerComponent,
    ServicesampleComponent,
    MenuComponent,
    RegisterComponent,
    ManageComponent,
    NumberonlyDirective,
    AlphanumberonlyDirective,
    DroupdownComponent
  ],
  imports: [BrowserModule,
     RouterModule.forRoot(routes),
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            DataTableModule,
            DropDownsModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
