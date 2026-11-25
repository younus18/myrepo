import test from "@playwright/test";

test('navigating to dashboard url', async({page,context})=>{

    await page.goto('//login.salesforce.com');
}
)
