import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answers } from '../Models/Answers'

@Injectable()
export class ConfigService {
    //private configUrl = `http://api-stopots.herokuapp.com/resposta/`;
    private configUrl = `http://localhost:3001/resposta/`;
    private http: HttpClient;
  constructor() {}

  getConfig(letter: string) {
    return this.http.get<Answers>(this.configUrl+letter);
  }
}