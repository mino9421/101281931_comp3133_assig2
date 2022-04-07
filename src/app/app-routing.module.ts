import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminViewListingComponent } from './admin-view-listing/admin-view-listing.component';
import { HistoryComponent } from './history/history.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { NewlistComponent } from './newlist/newlist.component';
import { SearchListingComponent } from './search-listing/search-listing.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '', component: AdminViewListingComponent },
  { path: '', component: HistoryComponent },
  { path: '', component: ListingComponent },
  { path: '', component: LoginComponent },
  { path: '', component: NewlistComponent },
  { path: '', component: SearchListingComponent },
  { path: '', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
