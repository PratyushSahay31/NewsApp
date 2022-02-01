import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service : NewsapiService) { }
 techDisplay:any=[];
  ngOnInit(): void {
    this._service.techApi().subscribe((result:any)=>{
      console.warn(result)
      this.techDisplay=result.articles;
    })
  }

}
