export class PostItNote {

    constructor(public story: string, public color: string, public boardCol: BoardColumn) {

    }
}


export enum BoardColumn {
    Todo,
    Doing,
    Done
};