const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('individual pokemon page can be navigated to', async ({ page }) => {
    const ivysaur = page.getByRole('link', { name: 'ivysaur' })
    await ivysaur.click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})