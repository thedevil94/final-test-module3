import {Injectable} from '@angular/core';
import {Awesomes} from './awesomes';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwesomesService {

  public awesomeList: Awesomes[];
  public url = 'http://localhost:3000/awesomes';

  constructor(private httpClient: HttpClient) {
  }

  setAwesomes(awesomes: Awesomes[]) {
    this.awesomeList = awesomes;
  }

  getCurrentAwesomeList() {
    return this.awesomeList;
  }

  getList(): Observable<Awesomes[]> {
    return this.httpClient.get<Awesomes[]>(this.url);
  }

  addAwesome(awesomes: Awesomes) {
    this.awesomeList.push(awesomes);
  }


  deleteAwesomes(awsomes: Awesomes) {
    let tmp = [];
    for (let item of this.awesomeList) {
      if (item.id !== awsomes.id) {
        tmp.push(item);
      }
    }
    this.awesomeList = tmp;
  }

  editAwesome(awesome: Awesomes) {
    const position = -1;
    for (let item of this.awesomeList) {
      if (item.id === awesome.id) {
        item.tag = awesome.tag;
        item.url = awesome.url;
        item.descriptions = awesome.descriptions;
      }
    }
  }
}

