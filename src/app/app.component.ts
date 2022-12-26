import { Component } from '@angular/core';
import { BoardColumn, PostItNote } from './postItNote';
import { Board } from './board';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private boardNotes = new Board([
    new PostItNote("Water the plants", 'Yellow', BoardColumn.Todo),
    new PostItNote("Walk the dog", 'Green', BoardColumn.Done),
    new PostItNote("Cut Flowers", 'Yellow', BoardColumn.Doing),
    new PostItNote("Wash the floor", 'Yellow', BoardColumn.Todo),
    new PostItNote("Turn of iron", 'Yellow', BoardColumn.Todo)
  ]);

  chosenColor: any;
  magnifiedStory: string | undefined;
  postColors: string[] = ['Yellow', 'Green', 'Pink', 'Blue'];

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

  addNote(story: string, chosenColor: string) {
    console.log(chosenColor)
    
    this.boardNotes.addNewNote(story, chosenColor, 0);
  }

  moveToDo(note: PostItNote) {
    note.boardCol = BoardColumn.Todo;
  }

  moveDoing(note: PostItNote) {
    note.boardCol = BoardColumn.Doing;
  }

  moveDone(note: PostItNote) {
    note.boardCol = BoardColumn.Done;
  }
}

