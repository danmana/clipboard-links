import clipboard from 'clipboardy';
import getUrls from 'get-urls';
import fs from 'fs';

let lastText = null;
setInterval(() => {
  try {
    const text = clipboard.readSync();
    if (text && text != lastText) {
      lastText = text; // avoid writing the same urls every second
      const urls = getUrls(text);
      const now = new Date().toISOString();
      for (const url of urls) {
        fs.appendFileSync('./urls.txt', `${now} ${url}\n`);
      }
    }
  } catch (e) {
    console.error(e);
  }
}, 500);