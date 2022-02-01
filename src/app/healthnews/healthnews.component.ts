import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';
@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _service:NewsapiService) { }
  healthDisplay:any=[];
  ngOnInit(): void {
    this._service.healthApi().subscribe((result:any)=>{
      console.warn(result.articles)
      this.healthDisplay=result.articles
    })
  }

}
