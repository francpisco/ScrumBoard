import { PostItNote, BoardColumn } from "./postItNote.model";

export class SimpleDataSource {
    private data: PostItNote[];

    constructor() {
        this.data = new Array<PostItNote>(
            new PostItNote(1, "Water the plants", 'Yellow', BoardColumn.Todo),
            new PostItNote(2, "Walk the dog", 'Green', BoardColumn.Done),
            new PostItNote(3, "Cut Flowers", 'Yellow', BoardColumn.Doing),
            new PostItNote(4, "Wash the floor", 'Yellow', BoardColumn.Todo),
            new PostItNote(5, "Turn of iron", 'Yellow', BoardColumn.Todo)
        )
    }

    getData(): PostItNote[] {
        return this.data;
    }
}