/* Preparing the environment
npm install
npm install -D @playwright/test
npx playwright install
npx playwright test tests/ui.test.js
*/

const { test, expect } = require('@playwright/test');

test('Verify "All books" link is visible', async ({ page }) => {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('nav.navbar');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify "Login" button is visible', async ({ page }) => {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('nav.navbar');

    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});