import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { ListingComponent } from './listing/listing.component';
import { SearchListingComponent } from './search-listing/search-listing.component';
import { NewlistComponent } from './newlist/newlist.component';
import { AdminViewListingComponent } from './admin-view-listing/admin-view-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HistoryComponent,
    ListingComponent,
    SearchListingComponent,
    NewlistComponent,
    AdminViewListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
