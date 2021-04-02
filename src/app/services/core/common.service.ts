import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpService) { }

  listusers() {
    return this.http.getApi("/users");
  }
  listuserPost(id) {
    return this.http.getApi("/posts?userId="+id);
  }

}

