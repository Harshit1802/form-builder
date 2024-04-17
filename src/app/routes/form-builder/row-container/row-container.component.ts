import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row-container',
  templateUrl: './row-container.component.html',
  styleUrls: ['./row-container.component.scss']
})
export class RowContainerComponent {
@Input() rowComponent:any;
}
