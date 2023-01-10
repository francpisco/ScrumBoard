import { Component } from '@angular/core';
import { BoardColumn, PostItNote } from './postItNote.model';
import { Board } from './board.model';
import { Model } from './repository.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model;
  chosenColor: any;
  magnifiedStory: string | undefined;
  postColors: string[];

  constructor() {
    this.model = new Model();
    this.postColors = ['Yellow', 'Green', 'Pink', 'Blue'];
  }
}

