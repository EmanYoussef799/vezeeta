import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentarr:any=[
    {id:0,
      name:"Eman Tantawy",
      title:"Dental and Cosmetic Dental CenterDentist",
      im:"https://th.bing.com/th/id/R.2e80eda424f7a19a67b3a3d7337bdbbe?rik=4ZCbQjDJ6Kpz7A&riu=http%3a%2f%2fultrazz.com%2fwp-content%2fuploads%2f2012%2f09%2fCorbis-42-34145937.jpg&ehk=EKICPeFEpqrg51MLtV%2fb5iajIVR%2bMrqdkr7WU4lRRJY%3d&risl=&pid=ImgRaw&r=0",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    
    },
    {id:1,
      name:"Ahmed Badr",
      title:"Specialist in fixed prosthodontics",
      im:"https://www.doctor-haleem.com/images/doctor-image.png",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    
    },
    {id:2,
      name:"Khaled Ali",
      title:"Dental and Cosmetic Dental CenterDentist",
      im:"https://www.gravesgilbert.com/wp-content/uploads/2012/06/7-24-20-Shots-9.jpg",
      fees:"100 EGP",
      location:"El-Zaiton",
      wt:"12 Minutes",
      phone:"16679-Cost for regular call"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
