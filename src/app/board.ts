import { PostItNote, BoardColumn } from "./postItNote";

export class Board {
    
    constructor(private notes: PostItNote[]) {

    }

    get allNotes(): readonly PostItNote[] {
        return this.notes;
    }

    addNewNote(story: string, color: string, col: BoardColumn) {
        this.notes.push(new PostItNote(story, color, col));
    }
}