import { Site } from './../Models/site';
import { Injectable } from '@angular/core';
export const directions: any = {
    "auto": {
        icon: "rowfield",
        shading: true,
        position: {
            of: "#grid",
            my: "right bottom",
            at: "right bottom",
            offset: "-16 -16"
        }
    },
    "up": {
        icon: "rowfield",
        shading: true,
        direction: "up",
        position: {
            of: "#grid",
            my: "right bottom",
            at: "right bottom",
            offset: "-16 -16"
        }
    },
    "down": {
        icon: "rowfield",
        shading: true,
        direction: "down",
        position: {
            of: ".dx-datagrid-rowsview",
            my: "right top",
            at: "right top",
            offset: "-16 16"
        }
    }
};


export class State {
    ID!: number;
    Name!: string;
}

let Sites: Site[] = [
    {
      "ID":1, 
      name: 'University of Delhi',
      location: 'New Delhi',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":2, 
      name:'Indian Institute of Technology',
      location:'Kanpur',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":3,	
      name: 'Indian Institute of Technology Bombay',
      location: 'Mumbai',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":4,	
      name: 'Indian Institute of Technology Delhi',
      location: 'New Delhi',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":5,	
      name:'Indian Institute of Technology Madras',
      location:'Chennai',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":6, 
      name: 'University of Aundh',
      location: 'Mumbai',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":7, 
      name:'Indian Institute of Technology',
      location:'Kolkata',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":8,	
      name: 'Indian Institute of Technology',
      location: 'Kerala',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":9,	
      name: 'Indian Institute of Technology',
      location: 'New Delhi',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":10,	
      name:'Indian Institute of Technology',
      location:'Punjab',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":11, 
      name: 'University of Delhi',
      location: 'New Delhi',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":12, 
      name:'Indian Institute of Technology',
      location:'Kanpur',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":13,	
      name: 'Indian Institute of Technology Bombay',
      location: 'Mumbai',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":14,	
      name: 'Indian Institute of Technology Delhi',
      location: 'New Delhi',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    },
    {
      "ID":15,	
      name:'Indian Institute of Technology Madras',
      location:'Chennai',
      Description: "Outlook India is one of the top magazines in the country."+ 
      "It publishes a variety of content online as well as produces hard copies. They are in sports,"+
      "entertainment, business, education, etc."
    }
  
];



@Injectable()
export class Service {
    getSites(): Site[] {
        return Sites;
    }
    getDirections():any{
      return directions;
    }
    delete(Site:number){
     Sites = Sites.filter(site=>site['ID'] != Site);
    }
    edit(index:number,Name:string,location:string,description:string){
      console.log(Sites[index])
      Sites[index].name = Name;
      Sites[index].location = location
      Sites[index].Description = description;
      console.log(Sites)
    }
    add(name:string,location:string,description:string){
      let new_id = Sites.length + 1;
      console.log(new_id)
      Sites.push({
        "ID":new_id,
        name:name,
        location:location,
        Description:description
      }) 
    }
}