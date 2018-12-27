import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[UserServiceService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us:UserServiceService) { }

  onClick(){
    console.log('clicked');
  }

  ngOnInit() {
  }

}
