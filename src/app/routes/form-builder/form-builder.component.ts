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
  constructor() {}
  // onSelect(item: any) {
  //   const Id = Math.random.toString();
  //   const valueItem = { id: Id, type: item.type, components: [] };
  //   //console.log(this.selected);
  //   this.xpComponent.push(valueItem);
  // }
  mainConfig: any[] = [
    {
      type: "text",
      fieldId: "text1",
      label: "Key",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "text1",
      label: "label",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "text1",
      label: "Placeholder",
      placeholder: "",
    },
    {
      label: "Size",
      id: "txtRole",
      type: "select",
      fieldId: "plantId",
      placeholder: "",
      options: {
        textField: "name",
        valueField: "_id",
        list: [
          { _id: 1, name: "Extra small" },
          { _id: 1, name: "small" },
          { _id: 1, name: "medium" },
          { _id: 1, name: "Large" },
        ],
      },
    },
    {
      type: "checkBox",
      fieldId: "chk1",
      label: "Read Only",
      placeholder: "",
    },
    {
      type: "checkBox",
      fieldId: "chk2",
      label: "Disabled",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "val",
      label: "value",
      placeholder: "",
    },
    {
      type: "checkBox",
      fieldId: "chk3",
      label: "Password mask",
      placeholder: "",
    },
  ];

  styleConfig: any[] = [
    {
      type: "heading",
      fieldId: "",
      label: "Component",
      placeholder: "",
    },
    {
      type: "tabs",
      fieldId: "text1",
      label: "Alignment",
      placeholder: "",
    },
   
    {
      type: "number",
      fieldId: "text1",
      label: "Font Size",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "text1",
      label: "Font Weight",
      placeholder: "",
    },
    {
      type: "color",
      fieldId: "text1",
      label: "Color",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "text1",
      label: "Class Name",
      placeholder: "",
    },
    {
      type: "heading",
      fieldId: "",
      label: "Wrapper",
      placeholder: "",
    },
  
    {
      label: "Size",
      id: "txtRole",
      type: "select",
      fieldId: "plantId",
      placeholder: "",
      options: {
        textField: "name",
        valueField: "_id",
        list: [
          { _id: 1, name: "Extra small" },
          { _id: 1, name: "small" },
          { _id: 1, name: "medium" },
          { _id: 1, name: "Large" },
        ],
      },
    },
    {
      type: "checkBox",
      fieldId: "chk1",
      label: "Read Only",
      placeholder: "",
    },
    {
      type: "checkBox",
      fieldId: "chk2",
      label: "Disabled",
      placeholder: "",
    },
    {
      type: "text",
      fieldId: "val",
      label: "value",
      placeholder: "",
    },
    {
      type: "checkBox",
      fieldId: "chk3",
      label: "Disabled",
      placeholder: "",
    },
  ];

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
}
