import { Component, OnInit } from '@angular/core';
import { Person } from '../classes/person';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {

  api: ApiService;
  searchName: string = ""
  'deletedPerson': Person;
  message: string = ""

  constructor(API: ApiService) { 
    this.api = API;
  }

  ngOnInit(): void {
  }

  deletePerson(){
    console.log("entered function with: "+this.searchName)
    var jsonRes = this.api.deletePerson(this.searchName)
    jsonRes.subscribe(data=>{
      this.deletedPerson = data
    })
    //Treating methods which retun anything as a person, fix
    console.log(this.deletedPerson)
    if(this.deletedPerson == undefined){
      this.message = "Delete Unsuccessful: "+this.searchName+" not found"
    }
    else{
      this.message = "Delete Successfull! Deleted "+this.searchName
    }
  }

}
