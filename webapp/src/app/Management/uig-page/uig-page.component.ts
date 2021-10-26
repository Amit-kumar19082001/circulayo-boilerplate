import { ItemType } from './../../Models/item-type';
import { Component, Input, OnInit } from '@angular/core';
import { ItemTypeServiceService } from 'src/app/services/item-type-service.service';
@Component({
  selector: 'app-uig-page',
  templateUrl: './uig-page.component.html',
  styleUrls: ['./uig-page.component.css']
})
export class UIGPageComponent implements OnInit {

  Demo_data:ItemType[];
  value:String;
  @Input() selected_item!:ItemType;
  constructor(service:ItemTypeServiceService) {
     this.Demo_data = service.get_item_type(); 
  }
  setItem(item_obj:any){
    this.selected_item = this.Demo_data[item_obj.selectedIndex-1];
    console.log(item_obj[item_obj.selectedIndex].value)
    
    const button = document.querySelector('#viewbutton') as HTMLButtonElement;
    console.log(button)
    button.click(); 
  }
  ngOnInit(): void {}

}
function input() {
  throw new Error('Function not implemented.');
}

