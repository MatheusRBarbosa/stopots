import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Answers } from '../Models/Answers'
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search = new FormControl('a')
  resp = ''
  private configUrl = `http://api-stopots.herokuapp.com/resposta/`;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchLetter(){
      this.http.get(this.configUrl+this.search.value).pipe(map(res => JSON.stringify(res))).subscribe(resp => this.resp = resp)
  }
}
