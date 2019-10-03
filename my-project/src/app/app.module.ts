import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApicompComponent } from './apiacess/apicomp/apicomp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './apiacess1/userlist/userlist.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule } from  '@angular/fire';
import { DbConfig } from './firebase/Environment';
import { BasemodComponent } from './comm/basemod/basemod.component';
import { ChildmodComponent } from './comm/childmod/childmod.component';
@NgModule({
  declarations: [
    AppComponent,
    ApicompComponent,
    UserlistComponent,
    FirebaseComponent,
    BasemodComponent,
    ChildmodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(DbConfig.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
