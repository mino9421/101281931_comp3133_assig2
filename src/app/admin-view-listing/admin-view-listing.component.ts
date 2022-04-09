import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-admin-view-listing',
  templateUrl: './admin-view-listing.component.html',
  styleUrls: ['./admin-view-listing.component.css']
})
export class AdminViewListingComponent implements OnInit {

  createListingForm: FormGroup;
  listings: any[] = [];

  constructor(private router: Router, private fb: FormBuilder, private databaseService: DatabaseService) {
    this.createListingForm = this.fb.group({
      listing_id: ['', Validators.required],
      listing_title: ['', Validators.required],
      description: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      postal_code: ['', Validators.required],
      price:  ['', Validators.required],
      email: ['', Validators.required],
      username: localStorage.getItem('username'),
      secret: localStorage.getItem('secret')
    });
  }

  ngOnInit(): void {
  }

  onSubmitCreateListingForm() {
    if(this.createListingForm.valid) {
      this.databaseService.createListing(this.createListingForm.value).subscribe(response => {
        console.log(response)
        alert(`Listing ID ${response.data.createListing.id} created!`)
        this.createListingForm.reset()
        this.getAllAdminListings()
      });
    } else {
      alert("Form not valid, check errors.")
    }
  }

  getAllAdminListings() {
    this.databaseService.getAllAdminListings().subscribe(response => {
      this.listings = response.data.getAllAdminListings
    })
  }
}
