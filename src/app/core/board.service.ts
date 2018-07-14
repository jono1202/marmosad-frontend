import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Board } from '../interfaces/board';
import { ConfigService } from '../common/services/config.service';

@Injectable()
export class BoardService {

  constructor(
    private location: Location,
    private http: HttpClient,
    private configService: ConfigService
  ) { }


  public getBoards(): Observable<any> {
    return this.http.get(this.configService.settings.api + '/boards');
  }
}