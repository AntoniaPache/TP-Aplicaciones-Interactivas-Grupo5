import fs from 'fs';
/*
fs.readdirSync('./').forEach(file => {
    if (file.endsWith('.json') && !['package.json', 'package-lock.json'].includes(file)) {
        const data = fs.readFileSync(file);
        let products = JSON.parse(data);
        products = products.map(product => {
            //product.name = product.name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            //product.image = product.image.replace('-100-0', '-1024-1024');
            product.stock = {
                "S": 5,
                "M": 10,
                "L": 8,
                "XL": 3
                // Añade aquí los valores de stock para cada talla según tu necesidad
            };

            product.color = "Negro"; // Cambia "Negro" por el color correspondiente según tu necesidad
            return product;
        });
        fs.writeFileSync(file, JSON.stringify(products, null, 2));
        console.log(`El archivo ${file} ha sido actualizado.`);
    }
});
*/
const jsons = ['./bikersMujer.json', './buzosHombre.json', './buzosMujer.json', './calzasMujer.json',
'./camperasHombre.json', './gorras.json', './gorros.json', './joggersHombre.json', './kitSportMujer.json',
'./medias.json', './remerasHombre.json', './remerasMujer.json', './shortsHombre.json', './topsMujer.json']

jsons.forEach(file => {
    const data = fs.readFileSync(file);
    let products = JSON.parse(data);

    const colors = {
        black: "Negro",
        white: "Blanco",
        blue: "Azul",
        green: "Verde",
        purple: "Violeta",
        pink: "Rosa",
        grey: "Gris"
    };

    const discounts = [0, 10, 0, 15, 0, 20, 0, 25, 0, 30, 0, 40, 0, 35, 0]

    const haveColor = (name) => {
        for (let color in colors) {
            if (name.toLowerCase().includes(color)) {
                return color;
            }
        }
        return null;
    };

    products = products.map(product => {
        const colorInDic = haveColor(product.name.toLowerCase());
        if (colorInDic) {
            product.color = colors[colorInDic];
        }
        product.discount = discounts[Math.floor(Math.random() * 16)]
        product.description = product.name + ' con un estilo unico'
        return product;
    });

    fs.writeFileSync(file, JSON.stringify(products, null, 2));
    console.log(`El archivo ha sido actualizado.`);
    console.log(products);

})