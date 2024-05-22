import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class LoginPage extends AbstractPage {
  // Define selectors
  // readonly page: Page
  readonly passwordInput: Locator
  readonly emailInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator
  readonly loginForm: Locator

  // Init selectors using constructor
  constructor(page: Page) {
    // this.page = page
    super(page)

  }

  // Define login page methods
  async login(email: string, password: string) {

  }
}
