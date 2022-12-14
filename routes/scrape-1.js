var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

/* scraping service route */
router.get('/', async function(req, res, next) {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless: true
    });

    // Create a page
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
        // if ([
        //     //'stylesheet', 
        //     'image', 
        //     'media', 
        //     'font',
        // ].indexOf( request.resourceType() ) !== -1 ) {
        //     console.log('request abort');
        //     request.abort();
        // } else {
            request.continue();
        // }
    });

    // Go to your site
	await page.goto('https://example.com/');
	
    // Close browser.
    await browser.close();

    res.json('hello world');
    // res.render('index', { title: 'Express' });
  });
  
  module.exports = router;