import { PlaywrightTestConfig } from '@playwright/test'
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
  timeout: 800000,
  retries: 0,
  testDir: 'tests/e2e/WeSki',
  use: {
    headless: true,
    trace: 'on',
    viewport: { width: 1920, height: 1080  },
    actionTimeout: 80000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    channel: 'chrome',
    screenshot: 'only-on-failure',
    launchOptions:{
      args: ['--start-maximized'],
    },
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
}
export default config