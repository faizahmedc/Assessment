import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpRequest,
} from "@angular/common/http";
// import { ResponseContentType, } from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { observable, throwError as observableThrow } from "rxjs";
import { environment } from '../../environments/environment' 
@Injectable({ providedIn: "root" })
export class HttpService {
  public serviceURL = environment.URL.base;
  constructor(private http: HttpClient) { }
  get(url) { 

    return this.http
      .get(url)
      .pipe(map(data => { return data; }), catchError(this.handleError));
  }
  getApi(path) {
    return this.http.get(this.serviceURL + path);
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg: string;
    if (err.error instanceof Error) {
      errMsg = `${err.status}-${err.error || ""} ${err.error.message}`;
    } else {
      errMsg = err.error ? err.error : err.toString();
    }
    return observableThrow(errMsg);
  }
}
