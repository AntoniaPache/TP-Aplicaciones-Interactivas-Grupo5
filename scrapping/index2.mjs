import fs from 'fs';

fs.readdirSync('./').forEach(file => {
    if (file.endsWith('.json') && !['package.json', 'package-lock.json'].includes(file)) {
        const data = fs.readFileSync(file);
        let products = JSON.parse(data);
        products = products.map(product => {
            //product.name = product.name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            //product.image = product.image.replace('-100-0', '-1024-1024');
            /*product.stock = {
                "S": 5,
                "M": 10,
                "L": 8,
                "XL": 3
                // Añade aquí los valores de stock para cada talla según tu necesidad
            };*/
            product.color = "Negro"; // Cambia "Negro" por el color correspondiente según tu necesidad
            return product;
        });
        fs.writeFileSync(file, JSON.stringify(products, null, 2));
        console.log(`El archivo ${file} ha sido actualizado.`);
    }
});
