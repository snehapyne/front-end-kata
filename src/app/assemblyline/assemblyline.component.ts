import { Component, Input, ViewChild } from "@angular/core";

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.scss"]
})
export class AssemblyLineComponent {
  @Input() stages: string[];
  @ViewChild('value') value = '';
  list = {};


  // Creating an list of arrays for inserting the values of the 4 different stages
  ngOnInit(): void {
    this.stages.forEach((stage) => {
      this.list[stage] = [];
    });
  }

  /* Adding an item to the 1st stage array inside the list and emptying 
  the input field after pressing enter */
  onAddItem(event: any): void {
    if (event.target.value) {
      this.list[this.stages[0]].unshift(event.target.value);
      this.value['nativeElement'].value = '';
    }
  }

  /* When right click is done, we first check if it is for the 1st stage or not,
  if yes then we remove that element from the array as per the requirement,
  if not then we allow it to move to the previous stage */

  onRightClickFunctionality(event, item, stage, i, j): void {
    if (i === 0) 
      this.list[stage].splice(j, 1);
      else {
      const prev = this.stages[i - 1];
      this.list[prev].push(item);
      this.list[stage].splice(j, 1);
    }
    // This is foor preventing the browser's default right click menu from appearing
    event.preventDefault();
  }

    /* When left click is done, we first check if it is for the last stage or not,
  if yes then we remove that element from the array as per the requirement,
  if not then we allow it to move to the next stage */

  onLeftClickFunctionality(item, stage, i, j): void {
    if (i === 3) 
      this.list[stage].splice(j, 1);
     else {
      const next = this.stages[i + 1];
      this.list[next].unshift(item);
      this.list[stage].splice(j, 1);
    }
}
}
