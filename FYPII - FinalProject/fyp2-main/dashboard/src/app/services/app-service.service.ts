import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AppService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCases(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/uploadCase/allUser`);
  }

  getDonors():Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/makeDonation/allUser`);
  }


  acceptCase(id): Observable<any> {
		return this.http.put<any>(`${this.baseUrl}/uploadCase/${id}/accept`, {});
	}
	rejectCase(id): Observable<any> {
		return this.http.put<any>(`${this.baseUrl}/uploadCase/${id}/reject`, {});
	}
	deleteCase(id): Observable<any> {
		return this.http.delete<any>(`${this.baseUrl}/uploadCase/${id}/delete`);
	}
  signinUser({ Login, Password }): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}Login`,
      { Login, Password },
      httpOptions
    );
  }
  registerUser(requestBody): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}User`, requestBody, httpOptions);
  }
  getAuthUserProfile(id): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}User/${id}`);
  }
  updateUser(requestBody, id): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}User/${id}`,
      requestBody,
      httpOptions
    );
  }
  forgetPassword(email): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}Login/ForgetPassword?emailAddress=${email}`);
  }
  changePassword(data,token):Observable<any>{
    return this.http.put<any>(
      `${this.baseUrl}Login/ChangePassword?Token=${token}`,
      data,
      httpOptions
    );

  }
}