import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminViewListingComponent } from './admin-view-listing/admin-view-listing.component';
import { HistoryComponent } from './history/history.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { NewlistComponent } from './newlist/newlist.component';
import { SearchListingComponent } from './search-listing/search-listing.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'listing', pathMatch: 'full' },
  { path: 'listing', component: ListingComponent },
  { path: 'adminviewlisting', component: AdminViewListingComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'newlist', component: NewlistComponent },
  { path: 'searchlisting', component: SearchListingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
