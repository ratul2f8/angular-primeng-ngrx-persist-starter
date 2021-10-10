import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  createModalOpen: boolean = false;
  title = 'ngrx-tut';
  toggleModal = () => {
    this.createModalOpen = !this.createModalOpen
  }
  
  constructor(private primengConfig: PrimeNGConfig){
    
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
