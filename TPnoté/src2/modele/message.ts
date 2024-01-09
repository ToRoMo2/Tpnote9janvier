export abstract class Message {
    protected texte: string;

    constructor(texte: string) {
        this.texte = texte;
    }

    public abstract afficher(): string;

    public abstract crypter(): string;
}
