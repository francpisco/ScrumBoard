import { PostItNote, BoardColumn } from "./postItNote.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
    private dataSource: SimpleDataSource;
    private board: PostItNote[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.board = new Array<PostItNote>();
        this.dataSource.getData().forEach(p => this.board.push(p));
    }

    getBoard(): PostItNote[] {
        return this.board;
    }

    getTodoNotes(): readonly PostItNote[] {
        return this.board.filter(note => note.boardCol == 0);
    }
    
    getDoingNotes(): readonly PostItNote[] {
        return this.board.filter(note => note.boardCol == 1);
    }
    
    getDoneNotes(): readonly PostItNote[] {
        return this.board.filter(note => note.boardCol == 2);
    }

    getNote(id: number): PostItNote | undefined {
        return this.board.find(n => n.id == id);
    }

    saveNote(story: string, color: string) {
        let note = new PostItNote(0, story, color, BoardColumn.Todo);
        this.board.push(note);
    }

    deleteNote(id: number) {
        let index = this.board.findIndex(n => n.id == id);
        if (index > -1) {
            this.board.splice(index, 1);
        }
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