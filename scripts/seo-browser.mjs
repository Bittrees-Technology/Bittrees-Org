import {chromium} from '@playwright/test';
import {createServer} from 'node:http';
import {readFile,mkdir} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('build');
const server=createServer(async(req,res)=>{
 let path=new URL(req.url,'http://localhost').pathname;
 if(path==='/')path='/index.html';else if(path==='/info')path='/info.html';
 const file=resolve(root,'.'+path);
 if(!file.startsWith(root+sep)){res.writeHead(404).end();return;}
 try{const data=await readFile(file);res.setHeader('content-type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml'})[extname(file)]||'application/octet-stream');res.end(data);}catch{res.writeHead(404,{'content-type':'text/html'});res.end(await readFile(resolve(root,'404.html')));}
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=`http://127.0.0.1:${server.address().port}`;
let browser;
try{
 browser=await chromium.launch();
 for(const javaScriptEnabled of [false,true]){
  const context=await browser.newContext({javaScriptEnabled,viewport:{width:390,height:844}});
  await context.route('**/*',route=>route.request().url().startsWith(base)?route.continue():route.abort());
  const page=await context.newPage();
  await page.goto(base);
  assert.equal(await page.locator('h1').textContent(),'Bittrees');
  assert.equal(await page.locator('main').count(),1);
  assert.equal(await page.getByRole('link',{name:'Bittrees, Inc.',exact:true}).count(),1);
  assert.equal(await page.getByRole('link',{name:/AI.*Mac/}).count(),0);
  await page.getByRole('link',{name:'Bittrees',exact:true}).click();
  await page.waitForURL(base+'/info');
  assert.equal(await page.title(),'About Bittrees | Our Mission');
  assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://bittrees.org/info');
  await page.getByRole('link',{name:'Bittrees',exact:true}).click();
  await page.waitForURL(base+'/');
  await page.setViewportSize({width:320,height:800});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'320px overflow');
  if(javaScriptEnabled){await mkdir('artifacts/seo',{recursive:true});await page.screenshot({path:'artifacts/seo/mobile.png'});}
  assert.equal((await page.goto(base+'/missing-page')).status(),404);
  await context.close();
 }
 console.log('Browser checks passed with and without JavaScript: links, route metadata, mobile width and 404.');
}finally{await browser?.close();await new Promise(r=>server.close(r));}
