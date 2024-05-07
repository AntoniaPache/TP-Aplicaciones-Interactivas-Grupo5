import { chromium } from "playwright";
import fs from 'fs';
import { get } from "http";

async function getProducts(link) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(link);

    // Espera a que el selector '.span3.item-container.m-bottom-half' esté presente en la página
    await page.waitForSelector('.span3.item-container.m-bottom-half');
    await page.waitForTimeout(10000);

    const products = await page.$$eval('.span3.item-container.m-bottom-half', results => (
        results.map(el => {
            const name = el.querySelector('.item-name')?.innerText;
            if (!name) return null;

            const price = el.querySelector('.item-price')?.innerText;
            const image = el.querySelector('img').getAttribute('src');
            const gender = "mujer";
            const stock = "10";
            const type = "buzo";

            return {
                name,
                price,
                image,
                gender,
                stock,
                type
            };
        })
    ));

    const safeFilename = link.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    fs.writeFileSync(safeFilename+'.json', JSON.stringify(products, null, 2));

    await browser.close();
};

const routes = [
    "https://www.fuark.com.ar/accesorios/gorras/",
    "https://www.fuark.com.ar/accesorios/medias/",
    "https://www.fuark.com.ar/accesorios/beannies/"
]

routes.forEach(element => {
    getProducts(element);
});