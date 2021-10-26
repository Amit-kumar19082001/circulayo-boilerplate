import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemType } from '../../Models/item-type';
import { ItemTypeServiceService } from './../../services/item-type-service.service';
import swal from 'sweetalert2';
import { DxDataGridComponent } from 'devextreme-angular';
@Component({
  selector: 'app-item-type-management',
  templateUrl: './item-type-management.component.html',
  styleUrls: ['./item-type-management.component.css']
})
export class ItemTypeManagementComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  Demo:ItemType[];
  item: ItemType;
  directions: any;
  toddlerDemo: any;
  selectedRowIndex:number = -1;
  previous:any;
  no_of_code:number=0;
  sidebarselectedItem:string = "ITEM TYPE";
  ngOnInit(): void {
    let html_obj = document.querySelector('.item') as HTMLAnchorElement;
    this.previous = html_obj;
    html_obj.className = html_obj?.className+"side_bar_menu nav-link text-white active";
  }

  constructor(private service: ItemTypeServiceService) {
    this.Demo = service.get_item_type();
    console.log(this.Demo)
  }

  setDataSource(str:string){}

  setItemno(){
    const codenumber = document.querySelector('#editnumber') as HTMLInputElement;
    const generate_code = document.querySelector('#send_data') as HTMLInputElement;
    this.no_of_code = Number(codenumber.value);
    console.log(this.no_of_code)
    generate_code.click();
  }

  setData(obj:ItemType){
    this.item = obj;
  }
  
  setitem(obj:any){
    console.log(obj)
    const button = document.querySelector('#viewbutton') as HTMLButtonElement;
    console.log(button)
    button.click();
  }
  setsidebarTitle(selectedItem:string,obj:any){
    console.log(this.previous)
    this.sidebarselectedItem = selectedItem;
    if(this.previous!=undefined)
      this.previous.className = "side_bar_menu nav-link text-white";
    obj.className = obj.className+' active';
    this.previous = obj;
  }
  editdata(){
    let Name = document.querySelector('#editname') as HTMLInputElement; 
    let location = document.querySelector('#editloc') as HTMLInputElement;
    let description = document.querySelector('#edit_txtarea') as HTMLTextAreaElement;
    // this.service.edit(this.selectedRowIndex,Name.value,location.value,description.value);
    swal.fire({
      position: 'center',
      icon: 'success',
      title:'Successfully edited',
      showConfirmButton: false,
      timer: 1500
    })
  }

  editRow() {
    //this.grid.instance.editRow(this.selectedRowIndex);
    let Name = document.querySelector('#editname') as HTMLInputElement; 
    let location = document.querySelector('#editloc') as HTMLInputElement;
    let description = document.querySelector('#edit_txtarea') as HTMLTextAreaElement;
    const button = document.querySelector('#editbutton') as HTMLButtonElement;
    this.item = this.Demo[this.selectedRowIndex];
    console.log(this.selectedRowIndex);
    Name.value = this.item['name'];
    description.value = this.item['description'];
    console.log(button)
    button.click();
    //this.grid.instance.deselectAll();
  }
  
  deleteRow() {
    swal.fire({
      icon:'error',
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.grid.instance.deleteRow(this.selectedRowIndex);
        // this.service.delete(this.selectedRowIndex);
        this.grid.instance.deselectAll();
        swal.fire('Removed', '', 'success')
      } else if (result.isDenied) {
        
      }
    })
    
  }

  addData(){
    let Name = document.querySelector('#name') as HTMLInputElement; 
    let location = document.querySelector('#location') as HTMLInputElement;
    let description = document.querySelector('#floatingTextarea2') as HTMLTextAreaElement;
    // this.service.add(Name.value,location.value,description.value)
    Name.value = "";
    location.value = "";
    description.value = "";
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully created',
      showConfirmButton: false,
      timer: 1500
    })
  }
  addRow() {
    const button = document.querySelector('#button-addon1') as HTMLButtonElement;
    console.log(button)
    button.click();
  }
  generate_uic(){
    const button = document.querySelector('#uigbutton') as HTMLButtonElement;
    console.log(button)
    button.click(); 
  }
  selectedChanged(e:any) {
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    console.log(this.selectedRowIndex);
    this.item = this.Demo[this.selectedRowIndex];
  }

}
