const { clickElement, putText, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Movie-ticket-booking tests", () => {

  test("One ticket happy test'", async () => {
    const title1 = await getText(page, "h1.page-header__title");
    await expect(title1).toContain("Идёмвкино");
    await clickElement(page, "body > nav > a:nth-child(6)");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await page.goto("https://qamid.tmweb.ru/client/hall.php");
    const title2 = await getText(page, ".buying__info-title");
    await expect(title2).toContain("Зверополис");
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(5)"), {timeout: 100000};
    await page.click("body > main > section > button"), {timeout: 100000};
    await page.goto("https://qamid.tmweb.ru/client/payment.php");
    const title3 = ".acceptin-button";
    await page.waitForSelector(title3, {
      visible: true,
    });
  });

  test("Two vip ticket happy test'", async () => {
    const title1 = await getText(page, "h1.page-header__title");
    await expect(title1).toContain("Идёмвкино");
    await clickElement(page, "body > nav > a:nth-child(6)");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await page.goto("https://qamid.tmweb.ru/client/hall.php");
    const title2 = await getText(page, ".buying__info-title");
    await expect(title2).toContain("Зверополис");
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span.buying-scheme__chair.buying-scheme__chair_vip"), {timeout: 100000};
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span.buying-scheme__chair.buying-scheme__chair_vip")
    await page.click("body > main > section > button"), {timeout: 100000};
    await page.goto("https://qamid.tmweb.ru/client/payment.php");
    const title3 = ".acceptin-button";
    await page.waitForSelector(title3, {
      visible: true,
    });
  });

  test("Two ticket sad test'", async () => {
    const title1 = await getText(page, "h1.page-header__title");
    await expect(title1).toContain("Идёмвкино");
    await clickElement(page, "body > nav > a:nth-child(6)");
    await clickElement(page, "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a");
    await page.goto("https://qamid.tmweb.ru/client/hall.php");
    const title2 = await getText(page, ".buying__info-title");
    await expect(title2).toContain("Зверополис");
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)"), {timeout: 100000};
    await page.click("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(8)")
    const button = await getText(page, "body > main > section > button");
    await expect(button).toContain("Выберите билет");
  });  
});
