import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _service:NewsapiService) { }
  businessDisplay:any=[];
  ngOnInit(): void {
    this._service.businessApi().subscribe((result:any)=>{
      console.warn(result);
      this.businessDisplay=result.articles

    })
  }

}
