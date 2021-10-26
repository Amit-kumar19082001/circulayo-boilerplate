import { Injectable } from '@angular/core';
import { ItemType } from '../Models/item-type';

let demoitemtype:ItemType[] = [
  {"ID":1, name: "bottle-cap",description:'A water bottle is a container that is used to hold water, liquids or other beverages for consumption. The use of a water bottle allows an individual to drink and transport a beverage from one place to another. A water bottle is usually made of plastic, glass, or metal.'},
  {"ID":2, name: "Mug",description:'A mug is a type of cup typically used for drinking hot drinks, such as coffee, hot chocolate, or tea. Mugs usually have handles and hold a larger amount of fluid than other types of cup. Typically, a mug holds approximately 240–350 ml (8–12 US fl oz; 8.3–12.5 imp fl oz) of liquid. A mug is a less formal style of drink container and is not usually used in formal place'},
  {"ID":3, name: "Bottle with Cap",description:'A bottle cap or bottle top seals the top opening of a bottle. A cap is typically colourfully decorated with the logo of the brand of beverage. Plastic caps are used for plastic bottles, while metal with plastic backing is used for glass; plastic caps are commonly made from PE or PP, whilst metal caps are usually either steel or aluminum .Plastic caps may have a pour spout. Flip-Top caps like Flapper closures provide controlled dispensing of dry products.'},
  {"ID":4, name: "Plastic Beer Keg",description:'A plastic beer keg includes an outer container and an inner liner. A removable lid is secured over an opening to the container to enclose the liner. The liner includes a neck portion and a body portion. A head contact member transfers axial forces imparted by handling equipment away from the neck portion.'}
] 

@Injectable({
  providedIn: 'root'
})

export class ItemTypeServiceService {
  constructor() { }
  get_item_type():ItemType[]{
    return demoitemtype;
  }
}
