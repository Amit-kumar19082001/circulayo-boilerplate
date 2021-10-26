import { SiteUsers } from './../../Models/site-users';
import { Site } from './../../Models/site';
import { Service } from './../../services/site.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import swal from 'sweetalert2';
import { DxDataGridComponent } from 'devextreme-angular';
import { SiteUserService } from 'src/app/services/site-user.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers:[Service]
})
export class LandingComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
  Demo:Site[];
  previous:any;
  site: Site;
  toddlerDemo:any;
  showlocation:boolean=true;
  siteuser:SiteUsers[];
  sitepagetitle:string;
  directions: any;
  selectedRowIndex:number = -1;
  ngOnInit(): void {
    let classNames = document.querySelector('#site') as HTMLAnchorElement;
    this.previous = classNames;
    classNames.className = classNames?.className+"side_bar_menu nav-link text-white active";
  }

  constructor(private service: Service, private siteuserservice:SiteUserService) {
    this.Demo = service.getSites();
    //this.selectedRowIndex = -1;
    this.toddlerDemo = this.Demo;
    this.sitepagetitle = "Site Management";
    console.log("Printing Demo")
    console.log(this.Demo)
    this.siteuser  = siteuserservice.getSiteUser();
  }
  
  setsidebaractiveitem(obj:any){
    console.log(this.previous)
    if(this.previous!=undefined)
      this.previous.className = "side_bar_menu nav-link text-white";
    obj.className = obj.className+' active';
    this.previous = obj;
  } 

  setDataSource(str:string){
    if(str=="Site"){
      this.toddlerDemo = this.Demo;
      this.showlocation = true;
      this.sitepagetitle = "Site Management";
    }
    else{
      this.toddlerDemo = this.siteuser;
      this.showlocation = false;
      this.sitepagetitle = "Site User Management";
    } 
  }

  setData(obj:Site){
    this.site = obj;
  }
  
  setsite(obj:any){
    console.log(obj)
    const button = document.querySelector('#viewbutton') as HTMLButtonElement;
    console.log(button)
    button.click();
  }
  
  editdata(){
    let Name = document.querySelector('#editname') as HTMLInputElement; 
    let location = document.querySelector('#editloc') as HTMLInputElement;
    let description = document.querySelector('#edit_txtarea') as HTMLTextAreaElement;
    // this.service.edit(this.selectedRowIndex,Name.value,location.value,description.value);
      this.toddlerDemo[this.selectedRowIndex].name = Name.value;
      this.toddlerDemo[this.selectedRowIndex].location = location.value
      this.toddlerDemo[this.selectedRowIndex].Description = description.value;
      console.log(this.Demo[this.selectedRowIndex])
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
    this.site = this.toddlerDemo[this.selectedRowIndex];
    console.log(this.selectedRowIndex);
    Name.value = this.site['name'];
    location.value = this.site['location'];
    description.value = this.site['Description'];
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
        this.Demo = this.Demo.filter(data=>this.selectedRowIndex != data.ID)
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
    this.service.add(Name.value,location.value,description.value)
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

  selectedChanged(e:any) {
    console.log(e)
    this.selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
    console.log(this.selectedRowIndex);
    this.site = this.Demo[this.selectedRowIndex];
  }

  // directionChanged(e) {
  //   config({
  //       floatingActionButtonConfig: this.directions[e.selectedItem]
  //   });

  //   repaintFloatingActionButton();
  // }
}

// onDelete(site:Site){
  //   swal.fire({
  //     title: 'Are you sure?',
  //     showCancelButton: true,
  //     confirmButtonText: 'Delete'
  //   }).then((result) => {
  //     // if (result.isConfirmed) {
  //     //   swal.fire('Removed', '', 'success')
  //     // } else if (result.isDenied) {
  //     //   swal.fire('Changes are not saved', '', 'info')
  //     // }
  //   })
    
  //   console.log(this.Demo);
  // }
