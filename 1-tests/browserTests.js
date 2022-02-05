"use strict";
require('chromedriver');
const { Builder, By, Key } = require("selenium-webdriver")

async function googleHabrTest() {
  let driver = await new Builder().forBrowser("chrome").build(); 
  await driver.get("https://www.google.ru/")
  await driver.findElement(By.name("q")).sendKeys('habrahabr', Key.RETURN); 
  await driver.findElement(By.xpath("//div[@id='rso']/div/div/div/div/div/div/div/a/h3")).click()
  let domElements = await driver.findElements(By.css("*"))
  console.log(domElements);
  await driver.quit();
}
// googleHabrTest()

async function gitHubTest(login, password) {
  let driver = await new Builder().forBrowser("chrome").build(); 
  await driver.get("https://github.com/")
  await driver.findElement(By.className("HeaderMenu-link flex-shrink-0 no-underline")).click()
  await driver.findElement(By.name("login")).sendKeys(`${login}`)
  await driver.findElement(By.name("password")).sendKeys(`${password}`, Key.RETURN)
  await driver.quit();
}

// gitHubTest()

async function textGeneratorTest() {
  let driver = await new Builder().forBrowser("chrome").build(); 
  await driver.get("https://coolgenerator.com/random-text-generator")
  await driver.findElement(By.className("btn btn-blue")).click()
  let result = await driver.findElement(By.css("textarea")).getText()
  console.log(result);
  await driver.quit();
}

// textGeneratorTest()

async function textGeneratorTest2(textToType) {
  let driver = await new Builder().forBrowser("chrome").build(); 
  await driver.get("https://coolgenerator.com/random-text-generator")
  await driver.findElement(By.className("btn btn-blue")).click()
  await driver.findElement(By.css("textarea")).clear()
  await driver.findElement(By.css("textarea")).sendKeys(textToType)
  await driver.quit();
}

// textGeneratorTest2('Hello world')

