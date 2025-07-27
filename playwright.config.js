// playwright.config.js

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    screenshot: 'only-on-failure', 
    trace: 'retain-on-failure',    
    video: 'retain-on-failure',    
  },

  reporter: [
    ['list'],                     
    ['html', { open: 'never' }]   
  ],
  testDir: './test',             
};

module.exports = config;
