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

  ngOnInit(): void {
    this.stages.forEach((stage) => {
      this.list[stage] = [];
    });
  }

  onAddItem(event: any): void {
    if (event.target.value) {
      this.list[this.stages[0]].unshift(event.target.value);
      this.value['nativeElement'].value = '';
    }
  }

  onRightClickFunctionality(event, item, stage, i, j): void {
    if (i === 0) 
      this.list[stage].splice(j, 1);
      else {
      const prev = this.stages[i - 1];
      this.list[prev].push(item);
      this.list[stage].splice(j, 1);
    }
    event.preventDefault();
  }

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
