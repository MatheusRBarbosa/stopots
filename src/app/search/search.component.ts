import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Answers } from '../Models/Answers'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search = new FormControl('a')
  resp: Answers = new Answers;
  private configUrl = `https://api-stopots.herokuapp.com/resposta/`;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  private getLetter() {
    return this.http.get<Answers>(this.configUrl + this.search.value)
  }

  searchLetter() {
    this.getLetter().subscribe((data: Answers) => this.resp = {...data})
  }
}
