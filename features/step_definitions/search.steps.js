const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After} = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");
const {setDefaultTimeout} = require("cucumber");

setDefaultTimeout(60 * 1000);

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user on page", async function () {
  return await this.page.goto("https://qamid.tmweb.ru/client/index.php")
});

When("user selects date", async function () {
  return await  clickElement(this.page, "body > nav > a:nth-child(6)");
});

When("user selects time", async function () {
  return await clickElement(this.page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a") 
});

When("user selects place", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)")
});

When("user selects first vip place", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span.buying-scheme__chair.buying-scheme__chair_vip")
});

When("user selects second vip place", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span.buying-scheme__chair.buying-scheme__chair_vip")
});

When("user selects first busy place", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)")
});

When("user selects second busy place", async function () {
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(8)")
});

When("user booking ticket", async function () {
  return await clickElement(this.page, "body > main > section > button")
});

Then("user sees text 'Выберите билет'", async function () {
  const button = await getText(this.page, "body > main > section > button");
  await expect(button).toContain("Выберите билет");
  });  

Then("user sees button 'Получить код подтверждения'", async function () {
  const title3 = ".acceptin-button";
  await this.page.waitForSelector(title3, {
    visible: true,
  });
});
