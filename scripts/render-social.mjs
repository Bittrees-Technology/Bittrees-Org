import { chromium } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const browser=await chromium.launch();
try {
 const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
 await page.goto(pathToFileURL(resolve('design/social-preview.html')).href);
 await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:'public/social/bittrees.png'});
} finally {await browser.close();}
