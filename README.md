# **Exercice JS-PHP - Petition**

## **Enjeux**

L’objectif de cet exercice est de permette à Stockly d’estimer votre talent technique. L’exercice se veut trop long pour être fini, **votre objectif ne doit donc pas être de le finir**. Nous cherchons à estimer votre technicité mais aussi votre capacité à **découper un objectif** en différentes taches et les **prioriser**. Nous préférons un exercice non fini mais bien fait plutôt que bâclé. **Nous sommes intéressés par ce que vous faites de mieux** et non par vos erreurs; ainsi nous vous conseillons d’attaquer par ce que vous vous sentez le plus à même de réussir. Dans le cas improbable où vous finiriez l’exercice vous êtes libre de proposer et d’implémenter des pistes d’approfondissements. Le cahier des charges est volontairement large et il vous faudra **choisir la meilleure solution** pour répondre aux demandes.

## **Présentation**

Avec ce document, vous avez reçu une url de pétition change.org. (Voir §Documents)

**Vous devez réunir 100 000 signatures en moins d’une semaine.**

## **Modalités et Rendu**

- Vous devez coder un programme en JS (NodeJS) ou PHP.
- Le code devra être hébergé dans le repo Github mis à disposition. Le code doit être codé en utilisant Git et la propreté de l’arbre sera étudiée.
- Vous aurez une semaine pour réaliser l’exercice à partir de la réception de ce fichier, nous vous conseillons de passer au moins 5 heures dessus. Lors de du prochain entretien, 30 minutes (15 minutes présentation et 15 minutes de questions) seront consacrées à la présentation du code. Le temps de présentation étant extrêmement court, choisissez bien les passages que vous souhaitez présenter.
- Vous êtes libres d’utiliser toutes les dépendances et services externes que vous souhaitez mais Stockly ne doit pas avoir à payer pour tester votre code.
- Vous pouvez utiliser les frameworks ou module de votre choix. Cependant nous n’étudions que votre code, si tout est fait par les modules nous serons dans l’incapacité de vous évaluer. Comme un grand homme a un jour dit: « A grand pouvoir, grande responsabilité! »

## **Critères d’évaluation**

- Structure du code.
- Propreté du code.
- Nombre de features implémentées.
- Qualités des solutions imaginées.
- Arbre git: messages de commit et structure de l’arbre.

## **Documents**

<<<<<<< HEAD
## Process

### Proposal v0

- Reverse the change.org API
- Create a module to fire an API call
- Generate a list of users (given name, last name, email)
- Read CSV or DB
- Delay the api calls, to don't be blocked by change.org
- Pool of queries
- Linter, Flow
- Tests with mocha
- Docker configuration

### Proposal v1

- Nightmare JS
- Use a framework that simulate a browser
- Fill the form
- Submit the form
- Get the confirmation email
- Click to pass the verification check

## Architecture

- api
- users
- delayer

## ToDo

- [] Read file as a stream
- [] Post request from a stream
- [] Batch post requests
- [] Set a delay between each requests
- [] Docker configuration for dev environment

## API change.org

We can signup with a name, last name and an email.
After the submition we have to verify the email into our inbox.

The API request to submit a signature looks like this:

Request POST

```
curl 'https://www.change.org/api-proxy/-/signatures'
-H 'origin: https://www.change.org'
-H 'accept-encoding: gzip, deflate, br'
-H 'x-csrf-token: 42xxxxxxxxxxxxxxxxxxxxxx'
-H 'accept-language: en-US,en;q=0.9,fr;q=0.8,la;q=0.7'
-H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36'
-H 'content-type: application/json'
-H 'accept: application/json, text/javascript, */*; q=0.01'
-H 'authority: www.change.org'
-H 'x-requested-with: XMLHttpRequest'
--data-binary $'{"petition_id":42,"country_code":"FR","enable_human_verification":false,"consent_name":"global_consent_initial_eu_exp_control","consent_text":"Oui ! Dites-moi si cette pétition est victorieuse et comment je peux en aider d\'autres","page_context":"petitions_show","briteform_token":"briteform_disabled_FR_fr-FR","first_name":"First","last_name":"Last","email":"email@company.com","city":"xxxx","postal_code":"xxxxx","marketing_comms_consent":false,"public":false}'
```

Payload

```
briteform_token: "briteform_disabled_FR_fr-FR"
city: "xxxx"
consent_name: "global_consent_initial_eu_exp_control"
consent_text: "Oui ! Dites-moi si cette pétition est victorieuse et comment je peux en aider d'autres"
country_code: "FR"
email: "email@company.com"
enable_human_verification: false
first_name: "First"
last_name: "Last"
marketing_comms_consent: false
page_context: "petitions_show"
petition_id: 42
postal_code: "xxxxx"
public: false
```

Response

```
{"success":false,"graylisted":true,"user_id":1}
```

The boolean sucess should be true is the email is verified


## Nightmare

Link to confirm email address:

https://www.change.org/p/13954429/signatures/confirm?token=xxxxxxxxxx&utm_source=petition_signer_confirmation

How to handle all the emails
- Use the alias emails features
- Mailparser
- IMAP client
- To do the verification only a `curl -L` works as well

How to change location and ip address:
- Use a proxy
=======
- [Change Petition](https://www.change.org/p/yana%C3%ABl-barbier-hire-yana%C3%ABl-barbier?recruiter=917966904&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition)
- [Repo Github](https://github.com/StocklyRecruitment/CodeProject-YanaelBarbier)
- Pour toute question: oscar@stockly.ai
>>>>>>> master
