import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule} from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessewsComponent } from './businessnews/businessnews.component';
import { SportsComponent } from './sportsnews/sportsnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessewsComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
