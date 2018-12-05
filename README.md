# Stockly

Generate 100K signature on the change.org


[Chnage.org](https://www.change.org/p/yana%C3%ABl-barbier-hire-yana%C3%ABl-barbier?recruiter=917966904&utm_source=share_petition&utm_medium=copylink&utm_campaign=share_petition)


## Process

- Reverse the change.org API
- Create a module to fire an API call
- Generate a list of users (given name, last name, email)
- Read CSV or DB
- Deplay the api calls, to don't be blocked by change.org
- Linter, Flow
- Tests with mocha
- Docker configuration

## Architecture

- api
- file_reader
- delayer 



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
