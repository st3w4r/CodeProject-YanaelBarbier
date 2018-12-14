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
