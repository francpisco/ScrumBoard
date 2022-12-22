export class PostItNote {

    constructor(public story: string, public color: PostItColor, public boardCol: BoardColumn) {

    }
}

export enum PostItColor {
    Yellow,
    Pink,
    Green,
    Blue
};

export enum BoardColumn {
    Todo,
    Doing,
    Done
};