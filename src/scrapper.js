const Nightmare = require('nightmare');


class Scrapper {
  constructor() {
    this.nightmare = Nightmare();
  }

  signPetition(firstName, lastName, email) {
    return this.nightmare
      .viewport(1920, 1080)
      .cookies.clearAll()
      .goto('https://www.change.org/p/yana%C3%ABl-barbier-hire-yana%C3%ABl-barbier')
      .refresh()
      .click('#first_name')
      .type('#first_name', firstName)
      .click('#last_name')
      .type('#last_name', lastName)
      .click('#content > div > div:nth-child(4) > div.row.mbxxl.xs-mbn.xs-mhn > div.js-petition-action-panel-container.col-xs-12.col-sm-4.xs-phn > div > div > div > div > div.js-sign-and-share-components > div > div.mts > div > div > form > div.grouped-form.mvxs > div.control-group > div > span > input')
      .type('#content > div > div:nth-child(4) > div.row.mbxxl.xs-mbn.xs-mhn > div.js-petition-action-panel-container.col-xs-12.col-sm-4.xs-phn > div > div > div > div > div.js-sign-and-share-components > div > div.mts > div > div > form > div.grouped-form.mvxs > div.control-group > div > span > input', email)
      .check('#marketing_comms_consent_false')
      .check('#not_public')
      .screenshot(`/app/screenshots/change_form_${email}.png`)
      .click('#content > div > div:nth-child(4) > div.row.mbxxl.xs-mbn.xs-mhn > div.js-petition-action-panel-container.col-xs-12.col-sm-4.xs-phn > div > div > div > div > div.js-sign-and-share-components > div > div.mts > div > div > div:nth-child(2) > div > button')
      .screenshot(`/app/screenshots/change_submitted_${email}.png`)
  }

  checkEmail(url, email) {
    return this.nightmare
      .viewport(1920, 1080)
      .goto(url)
      .screenshot(`/app/screenshots/change_check_${email}.png`)
  }

  end() {
    return this.nightmare.end();
  }
}

module.exports = Scrapper;
