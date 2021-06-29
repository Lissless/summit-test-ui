import { Component, OnInit, OnChanges } from '@angular/core';
import { Person } from '../classes/person';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  api: ApiService;
  newPerson: Person={
    id: "new",
    name: "Tesuto",
    start_date: "2021-06-17",
    end_date: "2021-09-14",
    utilities: 45.55,
    owed: 78.87
  }
  'returnedPerson': Person;
  success: boolean = false;
  
  //success: boolean = false;

  constructor(private API: ApiService) { 
    this.api = API;
  }

  ngOnInit(): void {
  }

  addPerson(){
    //var returnedPerson: Person = new Person();
    
    var jsonRes = this.api.postPerson(this.newPerson)
    console.log(jsonRes)
    jsonRes.subscribe(
      data=>{
        this.returnedPerson = data
      }
    )
    console.log(this.returnedPerson)
    if(this.returnedPerson != undefined){
      this.success = true
    }

  }

}
