import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockapiService } from './service/mockapi/mockapi';
import { FruitlistComponent } from './component/fruit/list/fruitlist';
import { HttpClientModule } from '@angular/common/http';
import { MaincrudpageComponent } from './component/fruit/maincrudpage/maincrudpage';
import { AddFruitComponent } from './component/fruit/add/AddFruitComponent';
import { FormsModule } from '@angular/forms';
import { EditFruitComponent } from './component/fruit/edit/EditFruitComponent';
import { ViewFruitComponent } from './component/fruit/view/ViewFruitComponent';

@NgModule({
  declarations: [
    AppComponent,
    FruitlistComponent,
    MaincrudpageComponent,
    AddFruitComponent,
    EditFruitComponent,
    ViewFruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockapiService, {dataEncapsulation: false}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
