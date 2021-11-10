const puppeteer = require('puppeteer');
const fs = require('fs').promises;

(async () => {
    // Abre o navegador
    const browser = await puppeteer.launch( {headless: false} );

    // Abre uma nova aba
    const page = await browser.newPage();

    // Configura o tamanho da tela
    await page.setViewport({ width: 1366, height: 768});

    // Go to page
    await page.goto('https://www.amazon.com.br/Gyo-Junji-Ito/dp/6555140348/');

    // Clica no botão Entrar
    const _price = '#price';
    const _idioma = '#anonCarousel3 > ol > li:nth-child(2) > div > div.a-section.a-spacing-none.a-text-center.rpi-attribute-value > span';
    const _paginas = '#detailBullets_feature_div > ul > li:nth-child(3) > span > span:nth-child(2)';
    const _editora = '#anonCarousel3 > ol > li:nth-child(3) > div > div.a-section.a-spacing-none.a-text-center.rpi-attribute-value > span';
    const _autor = '#bylineInfo > span > span.a-declarative > a.a-link-normal.contributorNameID';
    const _dimensoes = '#anonCarousel3 > ol > li:nth-child(5) > div > div.a-section.a-spacing-none.a-text-center.rpi-attribute-value > span';

    const price = await page.waitForSelector(_price)
    const value = await price.evaluate(el => el.textContent)

    const idioma = await page.waitForSelector(_idioma)
    const teste = await idioma.evaluate(el => el.textContent)

    const paginas = await page.waitForSelector(_paginas)
    const teste2 = await paginas.evaluate(el => el.textContent)

    const editora = await page.waitForSelector(_editora)
    const teste3 = await editora.evaluate(el => el.textContent)

    const autor = await page.waitForSelector(_autor)
    const teste4 = await autor.evaluate(el => el.textContent)

    const dimensoes = await page.waitForSelector(_dimensoes)
    const teste5 = await dimensoes.evaluate(el => el.textContent)

    console.log(value)
    console.log(teste)
    console.log(teste2)
    console.log(teste3)
    console.log(teste4)
    console.log(teste5)

    await browser.close();
})();