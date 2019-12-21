import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RootObject } from "../interfaces/interface";
import { Respuesta } from "../interfaces/contractor";
import { token } from '../interfaces/login';
import { Code } from '../interfaces/code';
import { SignUp } from "../interfaces/signup";
import { ResendCode } from "../interfaces/resendcode";
import { Trades } from "../interfaces/trades";
import { Especiality } from '../interfaces/especiality';
import { Tools } from '../interfaces/tools';
import { AddTreades } from '../interfaces/addTrades';
import { EditUser } from '../interfaces/editUser';
import { User } from '../interfaces/user';
import { Email } from '../interfaces/email';
import { DetailProject } from '../interfaces/detail-project';
import { Jobs } from '../interfaces/jobs';
import { ViewJobs } from '../interfaces/viewJobs';
import { Document } from '../interfaces/addDocument';
import {GetQr} from "../interfaces/getQr";




@Injectable({
  providedIn: "root"
})
export class TestingService {
  url = "https://api.haskyconnections.com/";
  //  url = "http://api.araconsultoriaydesarrollos.com/"
  constructor(private http: HttpClient) {}

  getAbilities() {
    return this.http.get<RootObject>(
      `https://pokeapi.co/api/v2/pokemon/ditto/`
    );
  }

  getContractor() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZhYTg5YzkyOTMxOTk5YzQ5Zjg0MzE5OWY3NzJmOGNjMDk3MTlkYmYzNmU0ZDRiNjQ0NzY4M2UxNDhjMDU3ZDgwZWQ2NmI3YWM3Yjc0MjQyIn0.eyJhdWQiOiIxIiwianRpIjoiNmFhODljOTI5MzE5OTljNDlmODQzMTk5Zjc3MmY4Y2MwOTcxOWRiZjM2ZTRkNGI2NDQ3NjgzZTE0OGMwNTdkODBlZDY2YjdhYzdiNzQyNDIiLCJpYXQiOjE1Njc4MTQ2MjQsIm5iZiI6MTU2NzgxNDYyNCwiZXhwIjoxNTk5NDM3MDI0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ZbOH1PVC4JTPfAxO-ZCGf6qLTiAe4Ilid3_2Od_ZjxJhCu71_vZw0jmnpUH2Fa2CF3oaO0ANk0XYQ6RP0OAA-iLdtkHHKVwYFkstBKy7mRdmjgnZH3BwPf8JnXsrmxyulTsouwXEIMgFdOuNnasVHOXRtqq3u4onua1ERNRBusdc0uyqI0a_4dUOkcQdiKLmOtwZGis-etTJdaTBhdWQFp8cDsfDH3WOK6f_KY9Y3T0SVo4rF99XGMKFLfEmsX_Qx6kYNzs4YDF-0E6FQV4uPSzm9Sa-a7EEL5ZR2Sn0jNj8JKmfQ8dYgs_c20p1HCtbGnknG-n3ele30gKBYWJASzVQJzdf9pg1r8NyabdZ5ovAmCHUQYixhpG75cP0L3IN-6r3_fIugs5niMeDxMz-rv5ZkLwPJp3cqkzggNwg4meqvwz0quX91AkKjD51tpxOgO0zjOZKs8pl4NpCald1I4BuR8hN-USRE1Zasvb5ko3Z58ddgcpVURlib8xxp4WOqihcY3-F6C43aU1-M_CjnqtKl8ineaz1xo9eM8pZaorYp4Rzru1pRmOw1jq0WHSXGnOyovzmWPDrhIAHac7poiuNIJPdl7fvFPlPxWHMiYTkaIveSVfEchH1Zpw2pR_rFYEXSrKmn4z76m93b_wRhMQdeAOqxkV1O6hZWz6BOC0"
      }
    };
    return this.http.get<Respuesta>(
      "http://api.araconsultoriaydesarrollos.com/auth/user",
      axiosConfig
    );
  }

  Login(email, password) {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.post<token>(
      `${this.url}auth/login`,
      {
        email: email,
        password: password
      },
      axiosConfig
    );
  }
  singup(firstname, lastname, email, password, passwordr, phone) {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
   return this.http
      .post<SignUp>(
      `${this.url}auth/signup`,
        {
          first_name: firstname,
          last_name: lastname,
          email: email,
          password: password,
          password_confirmation: passwordr,
          phone_number: phone
        },
        axiosConfig
      );
  }
  verifyCode(token, code){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "contractor",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<Code>(`${this.url}auth/user/code`, {
      code: code
    }, axiosConfig);
  }
  resenCode(token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "contractor",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.get<ResendCode>(`${this.url}auth/user/send-code`, axiosConfig);
  }
  getTrades(){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "admin",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.get<Trades>(`${this.url}trades`, axiosConfig);
  }
  getEspeciality(){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "admin",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.get<Especiality>(`${this.url}specialties`, axiosConfig);
  }
  getTools(){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "admin",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.get<Tools>(`${this.url}tools`, axiosConfig);
  }
  addTrades(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<AddTreades>(`${this.url}auth/trades/worker`, {
      user_id: data.user_id,
      trade_id: data.trade_id,
      overtime: data.overtime,
      specialty_id: data.specialty_id
    }, axiosConfig);
  }
  addTradeAdress(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.put<EditUser>(`${this.url}auth/user/${data.id}`, {
      steps: "4",
      address: data.address,
      location: data.location
    }, axiosConfig);
  }
  addTradeWorkinDays(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.put<EditUser>(`${this.url}auth/user/${data.id}`, {
      steps: "5",
      working_days: data.working_days
    }, axiosConfig);
  }
  addTradesTools(userid, idtools, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<AddTreades>(`${this.url}auth/tools/worker`, {
      user_id: userid,
      tool_id: idtools
    }, axiosConfig);
  }
  addTradesTransport(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.put<EditUser>(`${this.url}auth/user/${data.id}`, {
      steps: "7",
      transport: data.transport
    }, axiosConfig);
  }
  getUser(token, id){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.get<User>(`${this.url}auth/user/${id}`, axiosConfig)
  }
  editUser(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "contractor",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.put<EditUser>(`${this.url}auth/user/${data.id}`, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      address: data.address
    }, axiosConfig)
  }
  editUserSignal(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "contractor",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.put<EditUser>(`${this.url}auth/user/${data.id}`, {
      onesignal_id: data.onesignal_id
    }, axiosConfig)
  }
  uploadPicturePerfil(data, token){
    let fb = new FormData();
    //fb.append('user_id', data.user_id);
    fb.append('profile_image', data.file);
    let axiosConfig = {
      headers: {
        "Accept": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post(`${this.url}auth/user/edit-profile`,fb,axiosConfig);
  }
    deleteTrades(data, token){
    let axiosConfig = {
      headers: {
        "Accept": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    let fb = new FormData();
    fb.append('user_id', data.user_id);
    fb.append('trade_id', data.trade_id);
    fb.append('specialty_id', data.specialty_id);
  
   return this.http.post<AddTreades>(`${this.url}auth/trades/worker-delete`, fb, axiosConfig);
  }
 
  deleteTools(data, token){
    let axiosConfig = {
      headers: {
        "Accept": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    let fb = new FormData();
    fb.append('user_id', data.user_id);
    fb.append('tool_id', data.tool_id);
   return this.http.post<AddTreades>(`${this.url}auth/tools/worker-delete`,fb, axiosConfig);
  }
  sendEmail(email){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "admin",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.post<Email>(`${this.url}send-email`, {
      email: email
    }, axiosConfig);
  }
  changePassoword(data){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "admin",
        "X-Requested-With": "XMLHttpRequest"
      }
    };
    return this.http.post<Email>(`${this.url}send-password`, {
      code: data.code,
      email: data.email,
      password: data.password
    }, axiosConfig);
  }
  detailProject(id, token){   
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<DetailProject>(`${this.url}auth/get-request-data` , {
      request_id: id
    }, axiosConfig);
  }
  findJobs(token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.get<Jobs>(`${this.url}auth/get-notifications`, axiosConfig);
  }

  acceptedJobs(data, token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "contractor",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<Code>(`${this.url}auth/request-worker/notify`, {
      user_id: data.user_id,
      request_id: data.request_id,
      contractor_id: data.contractor_id
    } ,axiosConfig);
  }
  viewJobs(token){
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.get<ViewJobs>(`${this.url}auth/get-request-user`, axiosConfig);
  }
  addDocumentd(data, token){
    let fb = new FormData();
    fb.append('user_id', data.user_id);
    fb.append('file', data.file);
    let axiosConfig = {
      headers: {
        "Accept": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    return this.http.post<Document>(`${this.url}auth/user/document`,fb,axiosConfig);
  }
  getQr(data, token){
    let axiosConfig = {
      headers: {
        "Accept": "application/json",
        "site": "worker",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    };
    try{
      return this.http.post<GetQr>(`${this.url}checkin/get-qr`, {
        user_id: data.user_id,
        project_id: data.project_id,
        request_id: data.request_id,
        date: data.date,
        time: data.time
      }, axiosConfig);
    }catch(error){
      console.log(error);
    }
  }

}

