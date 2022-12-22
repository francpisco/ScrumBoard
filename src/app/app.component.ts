import { Component } from '@angular/core';
import { BoardColumn, PostItColor, PostItNote } from './postItNote';
import { Board } from './board';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private boardNotes = new Board([
    new PostItNote("Water the plants", PostItColor.Yellow, BoardColumn.Todo),
    new PostItNote("Walk the dog", PostItColor.Green, BoardColumn.Done),
    new PostItNote("Cut Flowers", PostItColor.Yellow, BoardColumn.Doing),
    new PostItNote("Wash the floor", PostItColor.Yellow, BoardColumn.Todo),
    new PostItNote("Turn of iron", PostItColor.Yellow, BoardColumn.Todo)
  ]);

  chosenColor: any;
  postColors: PostColor[] = [
    { id: 0, color: 'Yellow' },
    { id: 1, color: 'Green' },
    { id: 2, color: 'Pink' },
    { id: 3, color: 'Blue' }
  ]

  get allNotes(): readonly PostItNote[] {
    return this.boardNotes.allNotes;
  }

  get todoNotes(): readonly PostItNote[] {
    return this.boardNotes.allNotes.filter(note => note.boardCol == 0);
  }

  get doingNotes(): readonly PostItNote[] {
    return this.boardNotes.allNotes.filter(note => note.boardCol == 1);
  }

  get doneNotes(): readonly PostItNote[] {
    return this.boardNotes.allNotes.filter(note => note.boardCol == 2);
  }

  addNote(story: string, chosenColor: any) {
    console.log(chosenColor.color)
    
    this.boardNotes.addNewNote(story, 0, 0);
  }
}

interface PostColor {
  id: number;
  color: string;
}
