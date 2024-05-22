import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly page: Page
  readonly signInButton: Locator
  readonly searchBox: Locator
  readonly linkFeedback: Locator

  constructor(page: Page) {
    this.page = page

  }

  async visit() {
    const urlAuto = process.env.MEETUP_URL_AUTO ?? '';
    await this.page.goto(urlAuto, { timeout: 30000 });
    // await this.page.context().clearCookies();
  }

}
