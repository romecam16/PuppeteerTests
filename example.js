const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});  
  const page = await browser.newPage();
  await page.goto('http://www.cnn.com/​');
  await page.screenshot({path: 'cnn.png'});

  await browser.close();
})();