import { Component, Input } from "@angular/core";
import * as uuid from "uuid";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { XpComponent } from "./form-builder.model";
import { ControlConfig } from "src/app/models/renderer";
import { FormsModule } from "@angular/forms";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-form-builder",
  templateUrl: "./form-builder.component.html",
  styleUrls: ["./form-builder.component.scss"],
})
export class FormBuilderComponent {
  availableControls = [{ id: uuid.v4(), type: "row", components: [] }];
  selected: string = "";
  @Input() menu: XpComponent[] = [];
  xpComponent: XpComponent[] = [];
  component: XpComponent = {} as XpComponent;
  public dialog: MatDialog={} as MatDialog;
  public dialogRef: MatDialogRef<ConfigurationComponent> = {} as MatDialogRef<ConfigurationComponent> 
  constructor() {}
  // onSelect(item: any) {
  //   const Id = Math.random.toString();
  //   const valueItem = { id: Id, type: item.type, components: [] };
  //   //console.log(this.selected);
  //   this.xpComponent.push(valueItem);
  // }


  menus: XpComponent[] = [
    {
      id: uuid.v4(),
      type: "row",
      components: [
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "textBox",
              components: [],
            },
          ],
        },
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "textBox",
              components: [],
            },
            {
              id: uuid.v4(),
              type: "row",
              components: [
                {
                  id: uuid.v4(),
                  type: "column",
                  components: [
                    {
                      id: uuid.v4(),
                      type: "checkBox",
                      components: [],
                    },
                    {
                      id: uuid.v4(),
                      type: "textBox",
                      components: [],
                    },
                    {
                      id: uuid.v4(),
                      type: "textBox",
                      components: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "radio",
              components: [],
            },
          ],
        },
      ],
    },
    {
      id: uuid.v4(),
      type: "row",
      components: [
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "checkBox",
              components: [],
            },
          ],
        },
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "textBox",
              components: [],
            },
          ],
        },
        {
          id: uuid.v4(),
          type: "column",
          components: [
            {
              id: uuid.v4(),
              type: "textBox",
              components: [],
            },
          ],
        },
      ],
    },
  ];

  openPopup() {
    const dialogRef = this.dialog.open(ConfigurationComponent, {
     
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
