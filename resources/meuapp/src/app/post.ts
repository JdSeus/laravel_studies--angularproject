export class Post {
    
    constructor(
        public nome: string,
        public titulo: string,
        public subtitilo: string,
        public email: string,
        public mensagem: string,
        public arquivo?: string,
        public id?: number,
        public likes?: number,
    ) {}
}
