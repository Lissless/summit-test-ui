import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Person } from "../classes/person";
import {catchError, retry, map, tap} from 'rxjs/operators'
import { stringify } from "@angular/compiler/src/util";


@Injectable()
export class ApiService{
    baseUrl: string;

    constructor(private httpclient: HttpClient){
        this.baseUrl = "http://127.0.0.1:5000/";
    }
    

    // getConfig(){
    //     return this.httpclient.get<Config>(this.configUrl)
    // }

    getPokemon(name: string): Observable<any> {
        var subject = name.toLowerCase();
        var uri = "https://pokeapi.co/api/v2/pokemon/" + subject + "/";
        return this.httpclient.get(uri, {observe: 'body', responseType: 'json'})
    }

    getPeople(q: string): Observable<Person[]> {
        console.log("Reached service api with: " + q)
        if(q == ""){
            return this.httpclient.get<Person[]>(this.baseUrl+'People')//, {observe: 'body', responseType: 'json'});//, {params: param1, observe: 'body', responseType: 'json'})
        }
        else{
            return this.httpclient.get<Person[]>(this.baseUrl+'People?start_with='+q)
        }
    }

    postPerson(post: Person): Observable<Person>{
        console.log(this.baseUrl+"Person")
        const convert = JSON.stringify(post)
        console.log(convert)
        // var head = new HttpHeaders()
        //     .set('content-type', 'application/json')//'application/xml')
        //     .set('Access-Control-Allow-Origin', '*')
        //     // Illiegal to set appearently
        //     // .set('Access-Control-Request-Method', 'POST')
        //     // .set('Access-Control-Request-Headers', 'Content-Type')
        // console.log(head)

        return this.httpclient.post<Person>(this.baseUrl+"Person", convert)//post, {'headers': head})
    }

    deletePerson(name: string): Observable<Person>{
        return this.httpclient.delete<Person>(this.baseUrl+"delete/"+name)
    }

   
}