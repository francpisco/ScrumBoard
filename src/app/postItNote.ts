export class PostItNote {

    constructor(public story: string, public color: PostItColor ) {

    }
}

enum PostItColor {
    Yellow,
    Pink,
    Green,
    Blue
};