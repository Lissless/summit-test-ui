import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Pokemon } from './classes/pokemon';
import { Person } from './classes/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-site'; // May Change?

  constructor(private _ApiService: ApiService){}

  'pkmn': Pokemon;
  'pers': Person[];

  ngOnInit(){


    
    this._ApiService.getPokemon("squirtle") // Change to get user input later
    .subscribe(
      data=>{
          // this.pkmn.id = data['id'];
          // this.pkmn.name = data['name']
          // for (var type of data['types']){
          //   this.pkmn.types.push(type['name'])
          // }
          this.pkmn = data;
      }
    );

    // this._ApiService.getPeople("Le")
    // .subscribe(
    //     data=>{
    //       this.pers = data;
    //     }
    // );

    // This is to post, there is authorization so cant do that
  
    // var post = new Person();
    // post.name = 'Billy';

    // this._ApiService.postPerson(post);


  }

}
