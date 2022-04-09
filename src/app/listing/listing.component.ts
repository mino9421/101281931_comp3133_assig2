import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  filteredListings: any[] = [];
  username: string | null;
  bookingForms: FormGroup[] = [];
  secret: string | null;
  search: string = "";
  listings: any[] = [];

  constructor(private router: Router, private databaseService: DatabaseService, private fb: FormBuilder) {
    this.secret = localStorage.getItem('secret');
    this.username = localStorage.getItem('username');  
  }

  ngOnInit(): void {
  }

  getAllAdminListings() {
    this.databaseService.getAllAdminListings().subscribe(response => {
      this.listings = response.data.getAllAdminListings 
      this.filteredListings = response.data.getAllAdminListings 
    })
  }

  searchEvent() {
    if (this.search) {
      this.filteredListings = this.listings.filter(l => {
        return ((l.listing_title.toLowerCase().includes(this.search.toLowerCase()) || 
            l.city.toLowerCase().includes(this.search.toLowerCase()) || 
            l.postal_code.toLowerCase().includes(this.search.toLowerCase()))
          )
      })
    } else {
      this.filteredListings = this.listings;
    }

  }

}
