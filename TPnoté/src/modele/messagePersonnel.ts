import { Message } from "./message.ts";
import { Email } from "./email.ts";

export class MessagePersonnel extends Message {
    private email: Email[];

    constructor(texte: string, email: Email[]) {
        super(texte);
        this.email = email;
    }

    public getEmail(): Email[] {
        return this.email;
    }

    public afficher(): string {
        return this.texte + ' (message personnel)' + ' pour : ' + this.email[0].getAdresse();
    }

    public crypter(): string {
        // deno-lint-ignore no-inferrable-types
        let messageCrypte: string = '';
        for (let i = 0; i < this.texte.length; i++) {
            messageCrypte += String.fromCharCode(this.texte.charCodeAt(i) + 1);
        }
        return messageCrypte;
    }
}