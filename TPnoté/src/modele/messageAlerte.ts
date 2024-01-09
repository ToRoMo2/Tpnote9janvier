import { Message } from "./message.ts";

export class MessageAlerte extends Message {
    public afficher(): string {
        return this.texte + ' (alerte générale)';
    }

    public crypter(): string {
        // deno-lint-ignore no-inferrable-types
        let messageCrypte: string = '';
        for (let i = 0; i < this.texte.length; i++) {
            messageCrypte += String.fromCharCode(this.texte.charCodeAt(i) + 3);
        }
        return messageCrypte;
    }
}