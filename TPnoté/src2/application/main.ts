// deno-lint-ignore-file prefer-const
import { Message } from "../modele/message.ts";
import { MessageAlerte } from "../modele/messageAlerte.ts";
import { MessagePersonnel } from "../modele/messagePersonnel.ts";
import { Email } from "../modele/email.ts";

let messages: Message[] = [];
let emails: Email[] = [];

// deno-lint-ignore no-inferrable-types
let saisie: string = 'o';
console.log('Bienvenue dans votre boîte mail !')
while (saisie === 'o') {
    let email: string;
    do {
        console.log("L'adresse email doit contenir au moins 8 caractères et contenir un @.")
        console.log('Veuillez saisir l\'adresse email de l\'expéditeur : ');
        email = prompt()!;
    } while (email.length < 8 || email.indexOf('@') === -1);
    emails.push(new Email(email));

    let type: string;
    do {
        console.log('Quel type de message voulez-vous saisir ? (a/p) : ');
        type = prompt()!;
    } while (type !== 'a' && type !== 'p');

    let texte: string;
    do {
        console.log('Le texte doit contenir au moins 10 caractères.');
        console.log('Veuillez saisir le message : ');
        texte = prompt()!;
    } while (texte.length < 10);

    if (type === 'a') {
        messages.push(new MessageAlerte(texte));
    } else {
        let nbDestinataires: number;
        do {
            console.log('Combien de destinataires voulez-vous saisir ? ');
            nbDestinataires = parseInt(prompt()!);
        }while (isNaN(nbDestinataires) || nbDestinataires < 1);

        let emailsDestinataires: Email[] = [];
        for (let i = 0; i < nbDestinataires; i++) {
            let emailDestinataire: string;
            do {
                console.log("L'adresse email doit contenir au moins 8 caractères et contenir un @.");
                console.log('Veuillez saisir l\'email du destinataire ' + (i + 1) + ' : ');
                emailDestinataire = prompt()!;
            } while (emailDestinataire.length < 8 || emailDestinataire.indexOf('@') === -1);
            emailsDestinataires.push(new Email(emailDestinataire));
        }
        messages.push(new MessagePersonnel(texte, emailsDestinataires));
    }

    console.log('Voulez-vous saisir un autre message ? (o/n) : ');
    saisie = prompt()!;
}

console.log('Voici les messages saisis : ');
for (let i = 0; i < messages.length; i++) {
    console.log("Message de : " + emails[i].getAdresse() + " : " + messages[i].afficher());
}

console.log('Voici les messages cryptés : ');
for (let i = 0; i < messages.length; i++) {
    console.log("Message de : " + emails[i].crypter() + " : " + messages[i].crypter());
    if (messages[i] instanceof MessageAlerte) {
        console.log(' pour : tous les étudiants');
    } else {
        let emails: Email[] = (messages[i] as MessagePersonnel).getEmail();
        for (let j = 0; j < emails.length; j++) {
            console.log(' pour : ' + emails[j].crypter());
        }
    }
}










