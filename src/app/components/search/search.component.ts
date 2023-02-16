import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm:string="";
  constructor(private _ActivatedRoute:ActivatedRoute , private _Router:Router){}
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  // search method
  search():void{
    if(this.searchTerm)
      this._Router.navigateByUrl('/search/' + this.searchTerm);
  }

}
