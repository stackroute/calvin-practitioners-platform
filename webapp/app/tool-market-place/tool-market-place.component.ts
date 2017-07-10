import { Component, OnInit } from '@angular/core';
import { ToolMarketService } from './tool-market-place.service';

@Component({
  selector: 'calvin-tool-market-place',
  templateUrl: './tool-market-place.component.html',
  styleUrls: ['./tool-market-place.component.css'],
  providers: [ToolMarketService]
})
export class ToolMarketPlaceComponent implements OnInit {

  tools = [];
  constructor(private toolService: ToolMarketService) { }

  ngOnInit() {
    this.toolService.getTools().subscribe(data => {
      this.tools = data;
      console.log('hellooo', this.tools);
    });
  }
}
