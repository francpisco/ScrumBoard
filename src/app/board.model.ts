import { PostItNote, BoardColumn } from "./postItNote.model";

export class Board {
    
    constructor(private notes: PostItNote[]) {

    }

    get allNotes(): readonly PostItNote[] {
        return this.notes;
    }

    addNewNote(id: number, story: string, color: string, col: BoardColumn) {
        this.notes.push(new PostItNote(id, story, color, col));
    }
}