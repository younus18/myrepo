import test, { expect } from "@playwright/test";

test('visual regression',async({page})=>{

    await page.goto('https://www.flipkart.com/')
    let snapshot = await page.screenshot()
    expect(snapshot).toMatchSnapshot()
})