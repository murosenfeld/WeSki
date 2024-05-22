import { test, expect } from '@playwright/test'
import { HomePage } from '../../../page-objects/HomePage'
import { LoginPage } from '../../../page-objects/LoginPage'
import { SearchPage } from '../../../page-objects/SearchPage'
import { format } from 'date-fns';
import mode  from '../../../list.json'

test.describe.configure({ mode: 'serial' });

test.describe('Main - Page - Dashboard Test', () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let searchPage: SearchPage
    const email = process.env.MEETUP_EMAIL ?? '';
    const password = process.env.MEETUP_PASSWORD ?? '';
    
    const now: Date = new Date();
    const formattedTime: string = format(now, 'HH:mm:ss');
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    const year: number = currentDate.getFullYear();
    console.log(formattedTime);
    const date = day+'_'+month+'_'+year+'_'+formattedTime;
    const currentDateTime = 'Auto_'+date;
    
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    searchPage = new SearchPage(page)
    await homePage.visit()
    // await loginPage.login(email, password)
  })


  test.describe('WeSki Home Page ', () => {
    test('Scenario 1.1: Basic Search', async ({ page }) => {
      await page.waitForTimeout(2000);
      console.log('Accept All Cookies')
      await searchPage.AcceptAllCookies();
      await page.waitForTimeout(1000);
      console.log('select To Leaving From')
      await searchPage.selectToLeavingFrom();
      await page.waitForTimeout(2000);
      console.log('select To Going To')
      await searchPage.selectToGoingTo(1);
      await page.waitForTimeout(2000);
      // await searchPage.clickToDate();
      // await searchPage.selectGuests();
      // await searchPage.clickToButtonFindYourTrip(2);
      console.log('select Searching For')
      await searchPage.selectSearchingFor();
      await page.waitForTimeout(5000);
      console.log('Validate total result title')
      const getTheResultTitle = await searchPage.getTheResultTitle();
      expect.soft(getTheResultTitle).toContain(mode.result['trip'])  
    })
  })
})
