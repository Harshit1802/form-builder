import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {


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
}
