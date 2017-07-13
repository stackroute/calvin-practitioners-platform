import { Component, OnInit } from '@angular/core';
import { ToolMarketService } from './tool-market-place.service';

@Component({
  selector: 'calvin-tool-market-place',
  templateUrl: './tool-market-place.component.html',
  styleUrls: ['./tool-market-place.component.css'],
  providers: [ToolMarketService]
})
export class ToolMarketPlaceComponent implements OnInit {

  tools;
  newTool;
  constructor(private toolService: ToolMarketService) { }

  ngOnInit() {
    this.toolService.getTools().subscribe(data => {
      this.tools = data;
      this.newTool=data;
      console.log('this.tools', this.tools);
      
    });
  }

  //searchValue;
  selectedValue(value1) {
    
    this.newTool=[];
    this.tools.forEach((data) => {
       console.log('this toolname',data.toolname);
        console.log('this toolname type',typeof data.toolname);
      if (data.toolname.includes(value1.toUpperCase())) {
       
       console.log("true", data);
       this.newTool.push(data);
       
      }
    });
  }

  selectpurpose(value){
    console.log(value);
    //value="test";
    this.newTool=[];
    this.tools.forEach((data) => {
      console.log('this toolname',data.purpose);
      if (data.purpose===value) {
       
       console.log("purpose true", data);
       this.newTool.push(data);
      }
    });
    
  }
  
}
