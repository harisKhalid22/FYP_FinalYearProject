import { Component, OnInit } from '@angular/core';
import {AppService} from '../services/app-service.service'

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors:any[]=[];
  constructor(private as : AppService) { }

  ngOnInit() {
    this.as.getDonors().subscribe(
      res=>{
        console.log(res.donors)
        this.donors=res.donors
      },
      err=>{
        console.log(err)
      }
      )
  }

}
