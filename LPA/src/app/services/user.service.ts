import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { User } from "../models/user";
import { Application } from "../models/application";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // api call to send an application:
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/api/loan_applicants`,
      user
    );
  }
  // api call for all applications :
  public getAllAplications(): Observable<Application[]> {
    return this.http.get<Application[]>(
      `${this.apiServerUrl}/api/loan_applicants/view_apps`
    );
  }

  // api call for a single application :

  public getSingleApplication(id: number): Observable<User> {
    return this.http.get<User>(
      `${this.apiServerUrl}/api/loan_applicants/view_application/${id}`
    );
  }
}
