const { chromium } = require('playwright');

async function getSign() {
  const browser = await chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:6699/sign/');
  const sign = await page.locator('body').textContent();
  // 关闭浏览器
  await browser.close();
  console.log('sign:', sign);
  return sign;
}

module.exports = getSign;
