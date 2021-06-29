import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Person } from '../classes/person';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //@Output() viewRequest = new EventEmitter();

  api: ApiService;
  //searchName: string = "L";
  'gotNames': string;
  'sub': Variable;
  'people$': Observable<Person[]>;
  persons: Person[] = [];
  clicked: boolean[] = [];
  id: number = 0;

  constructor(private API: ApiService) { 
    this.api = API;
  }

  ngOnInit(): void {
  }

  getPeople(value: string){
    //Takes JSON from request and gets them for display
    this.persons = []
    this.clicked = []
    // console.log(value)
    var jsonRes = this.api.getPeople(value)//this.searchName)
    this.people$ = jsonRes.pipe()
   
    //Takes all transimited results and puts them in accessible memory
    jsonRes.subscribe( val=>{
      val.forEach(elem=>{
        this.persons.push(elem)
      })
      this.clicked.push(false)
    })

    // console.log(this.persons[this.persons.length - 1])
    // console.log(this.persons.length)
    // console.log("the end")
    // for some reason you cannot access anything put in the
    // this.persons until you re-run the function exept it
    // is immediatly accessibe by the html, but not for logical use
    
  }

  viewPerson(index: number){
    var target = this.persons[index]
    

  }

  showDetails(event: any, index: number){
    console.log(event)
    console.log(index)
    this.toggleClicked(index)
    console.log(this.clicked)

  }

  toggleClicked(index: number){
    this.clicked[index] = !this.clicked[index]
  }

}
