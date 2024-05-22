import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'
import { format } from 'date-fns';

export class SearchPage extends AbstractPage {

  readonly selectLeavingFrom: Locator
  readonly selectLeavingFromSelectCity: Locator
  readonly selectGoingTo: Locator
  readonly selectGoingToInput: Locator
  readonly selectDate: Locator
  readonly selectFlexibleDate: Locator
  readonly selectNewYear: Locator
  readonly click2Adults: Locator
  readonly clickPlus: Locator
  readonly selectGuest: Locator
  readonly select5Years: Locator
  readonly clickButtonDoneGuest: Locator
  readonly selectTransfers: Locator
  readonly selectoption: Locator
  readonly clickButtonFindYourTrip: Locator
  readonly clickAddAge: Locator
  readonly AcceptAll: Locator
  readonly clickToSearch: Locator
  readonly getResultTitle: Locator


     // Init selectors using constructor
    constructor(page: Page) {
    // this.page = page
    super(page);

    this.AcceptAll = page.getByRole('button', { name: 'Accept all' });
    this.selectLeavingFrom = page.locator('#react-select-11-input');
    this.selectLeavingFromSelectCity = page.locator('#react-select-11-option-0').getByText('Any London Airport');
    this.selectGoingTo = page.locator('#react-select-2-input');
    this.selectGoingToInput = page.getByText('Crans-Montana', { exact: true });
    this.selectDate = page.locator('[data-test-id="desktop\\:home\\:dates-search-select"]').getByText('Jan 4 - Jan 11');
    this.selectFlexibleDate = page.getByText('Flexible dates');
    this.selectNewYear = page.locator('div').filter({ hasText: 'New Year' }).locator('svg');
    this.selectFlexibleDate = page.locator('[data-test-id="date-picker-done-button"]');
    this.click2Adults = page.getByText('2 adults');
    this.clickPlus = page.locator('div').filter({ hasText: '-0+' }).locator('[data-test-id="increase-guests-count"]')
    this.select5Years = page.getByText('5 years', { exact: true });
    this.clickButtonDoneGuest = page.locator('[data-test-id="group-size-picker-done-button"]')
    this.selectTransfers = page.locator('div').filter({ hasText: 'Stay+ Flights+Transfers' })
    this.selectoption = page.locator('.css-142zt7x-indicatorContainer')
    this.clickButtonFindYourTrip = page.getByText('Stay+ Flights+Transfers+Ski pass')
    this.clickToSearch= page.locator('[data-test-id="search-button"]')
    this.getResultTitle = page.locator('#results-header-container')
  }

  async AcceptAllCookies() {
    await this.AcceptAll.click();
  }

  async selectToLeavingFrom() {
    await this.selectLeavingFrom.click();
    await this.selectLeavingFromSelectCity.click();
  }

  async selectToGoingTo(num: number) {
    await this.selectGoingTo.click();
    await this.selectGoingToInput.click();
  }

  async clickToDate() {
    await this.selectDate.click();
    await this.selectFlexibleDate.click();
    await this.selectNewYear.click();
    await this.selectFlexibleDate.click();
  }

  async selectGuests() {
    await this.click2Adults.click();
    await this.clickPlus.click();
    await this.select5Years.click();
    await this.selectFlexibleDate.click();
    await this.clickButtonDoneGuest.click()
  }

  async clickToButtonFindYourTrip(num: number) {
    await this.selectTransfers.nth(num).click();
    await this.clickButtonFindYourTrip.click();
  }

  //Example to exeption error
  async selectSearchingFor() {
    try {
      await this.clickToSearch.click();
    }
    catch (error) {
      console.log('error', error);
      console.error('An unexpected error occurred:', error.message);
      console.error('Stack trace:', error.stack);
    }
  }

  async getTheResultTitle() {
    let getText = await this.getResultTitle.textContent()
    return getText
  }

  async setDate() {
    const now: Date = new Date();
    const formattedTime: string = format(now, 'HH:mm:ss');
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year: number = currentDate.getFullYear();
    console.log(formattedTime);
    const date = day+'_'+month+'_'+year+'_'+formattedTime;
    const business = 'Auto_'+date;
    return business;
  }
}

