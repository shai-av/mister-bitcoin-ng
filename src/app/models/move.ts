export class Move {
    constructor(
        public toId: string | undefined,
        public to: string,
        public at: Date,
        public amount: number
    ) { }
}
