import { PostItNote, PostItColor, BoardColumn } from "./postItNote";

export class Board {
    
    constructor(private notes: PostItNote[]) {

    }

    get allNotes(): readonly PostItNote[] {
        return this.notes;
    }

    addNewNote(story: string, color: PostItColor, col: BoardColumn) {
        this.notes.push(new PostItNote(story, color, col));
    }
}