import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-app-template',
  templateUrl: './app-template.component.html',
  styleUrls: ['./app-template.component.css']
})
export class AppTemplateComponent implements OnInit {
  
  items = ""
  itemDetails=""

   list = [];
   
  onClick(){
    const x ={
      name:this.items,
      details:this.itemDetails
    }
    this.list.push(x)
    this.items=""
    this.itemDetails=""
    
    console.log(this.list);
  }

  delete(index){
    this.list.splice(index,1);
  }

  constructor() { }

  ngOnInit() {
  }

}
