export class Email {
    private adresse: string;

    constructor(adresse: string) {
        this.adresse = adresse;
    }

    public getAdresse(): string {
        return this.adresse;
    }

    public crypter(): string {
        // deno-lint-ignore no-inferrable-types
        let emailCrypte: string = '';
        for (let i = 0; i < this.adresse.length; i++) {
            emailCrypte += String.fromCharCode(this.adresse.charCodeAt(i) + 3);
        }
        return emailCrypte;
    }
}