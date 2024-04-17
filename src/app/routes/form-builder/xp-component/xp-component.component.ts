import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { XpComponent } from '../form-builder.model';

@Component({
  selector: 'xp-component',
  templateUrl: './xp-component.component.html',
  styleUrls: ['./xp-component.component.scss']
})
export class XpComponentComponent implements  OnChanges {
  
ngOnChanges(): void {

}

@Input() configartion:any[]=[];

onChange(){
  // this.component = {id:"" ,type:this.selected ,components:[]};
  // console.log(this.selected);
  // this.component.components.push(this.component);
}
// addColumnToRow(rowComponent) {
//   // Assuming rowComponent is the row where you want to add the column
//   rowComponent.components.push({ type: 'column', components: [] });
// }
// onSelect(item){
//   const Id = Math.random.toString();
//   const valueItem = {id:Id,type:item.type,components:[]}
//   this.component.components.push(valueItem);

// }
}
