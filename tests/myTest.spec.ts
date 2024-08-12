import { test } from '@playwright/test';

test('it has an input field', async function checkInputField({ page }) {
  await page.goto("/");
  const input = page.getByPlaceholder("enter the name of item");
  await input.type('Pika');
  page.getByRole('paragraph', {name: 'Pika'})
})