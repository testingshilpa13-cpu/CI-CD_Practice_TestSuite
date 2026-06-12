import { test, expect,Locator } from '@playwright/test';
test.describe("Element GUI interactions", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        await expect(page).toHaveTitle("Automation Testing Practice");
    });
test("fill the text fields", async ({ page }) => {
    const nameInput = await page.locator('#name');
    await nameInput.fill("Shilpa");
    console.log("Value in name Input: " + await nameInput.inputValue()); //empty for innerText and testContent
    await page.locator('#email').fill("shilpa@example.com");
    await page.locator('#phone').fill("332-443-5111");
    await page.locator('#textarea').fill("Prairie Ct,Tx");
});

test("check radio buttons", async ({ page }) => {
    //radio button
  let isMaleChecked = await page.locator('#male');
    let  isFemaleChecked = await page.locator('#female');
    // await expect(isMaleChecked.isChecked()).toBe(false);
    // await expect(isFemaleChecked.isChecked()).toBe(false);

    await isMaleChecked.check();
    expect(await isMaleChecked.isChecked()).toBe(true);
    expect(await isFemaleChecked.isChecked()).toBe(false);
   // console.log("checked the radio button:Female", expect(isFemaleChecked.isChecked()).toBe(false));
   // console.log("Checked the radio button: Male" + expect(isMaleChecked.isChecked()).toBe(true));

    // await isFemaleChecked.check();
    // await expect(isFemaleChecked.isChecked()).toBe(true);
    // await expect(isMaleChecked.isChecked()).toBe(false);
   // console.log("checked the radio button:Female", expect(isFemaleChecked.isChecked()).toBe(true));
   // console.log("Checked the radio button: Male" + expect(isMaleChecked.isChecked()).toBe(false));
});
test("check checkboxes", async ({ page }) => {
const days : string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (let i = 0; i < await days.length; i++) {
        const day = days[i];
        console.log('Checked the checkbox for ', day);
        await page.locator(`input[type="checkbox"][value="${day}"]`).click();
        await expect(page.locator(`input[type="checkbox"][value="${day}"]`)).toBeChecked();
    }});

test("select options from dropdown", async ({ page }) => {

    const countryDropdown = await page.locator('#country');
    //await countryDropdown.selectOption('India');
    const dropDownOptions = await countryDropdown.allTextContents();
    console.log("Dropdown options: " + dropDownOptions);
        await countryDropdown.selectOption('India');
        console.log("Selected option: India");
});
});
    

