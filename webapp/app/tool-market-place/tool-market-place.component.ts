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
  constructor(private toolService: ToolMarketService) { }

  ngOnInit() {
    this.toolService.getTools().subscribe(data => {
      this.tools = data.rows;
      console.log('this.tools', this.tools);
    });
  }

  // let searchValue;
  selectedValue(value1) {
    this.tools.forEach((data) => {
      if (value1 === data.toolname) {
        console.log("true", data);

      }
    });
  }
  
}
