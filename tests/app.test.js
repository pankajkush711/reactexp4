const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('React App Selenium Test', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should open the React app and check the title', async function() {
    await driver.get('http://localhost:3000');
    const title = await driver.getTitle();
    expect(title).to.equal('React App');
  });
});
