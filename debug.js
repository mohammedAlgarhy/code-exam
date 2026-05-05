const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // تسجيل الأخطاء والتنبيهات
  page.on('pageerror', err => console.error('🔥 Page error:', err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') console.error(`📢 Console error: ${msg.text()}`);
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // فحص وجود عناصر أساسية
  const bodyText = await page.evaluate(() => document.body.innerText);
  if (bodyText.trim() === '') console.warn('⚠️ Body فارغ – قد يكون React لم يتحمّل');
  
  const hasRoot = await page.evaluate(() => !!document.getElementById('__next'));
  console.log(`✅ #__next موجود: ${hasRoot}`);
  
  await browser.close();
})();
