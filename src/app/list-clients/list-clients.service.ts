import {Base64} from "js-base64";
import {Base64Static} from "js-base64";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class ListClientsService {
  baseUrl: string = 'http://moko.by:5000/restapi/v1.0/';
  catalogClients: string = 'catalog/clients';
  headers: Headers;
  creds: string;
  basic: string;

  constructor(private http: Http) {
    this.creds = Base64.encode('Belarusachka:secret');
    this.basic = 'Basic ' + this.creds;
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", this.basic);
  }

  getListClients(): Observable<any> {
    return this.http.get(this.baseUrl + this.catalogClients, {headers: this.headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
