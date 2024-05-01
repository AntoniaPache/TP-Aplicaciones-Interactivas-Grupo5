import {useState} from 'react';
import React from 'react';


function DetalleProducto() {

    const [cant, setCant] = useState(0)

    return(
        <div className="detalle-container">
            <div className="imagen">
                <img src="" alt="" />
            </div>
            <div className="datos">
                <h1 id="encabezado">Nombre del Producto</h1>
                <span id="precio">$XX.XX</span>
                <form id="formularioCompra">
                    <div className="tallas">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <div className="cantidades">
                        <div className="cant">{cant}</div>
                        <div className="controlCant">
                            <button onClick={() => setCant((count) => count + 1)}>-</button>
                            <button onClick={() => setCant((count) => count - 1)}>+</button>
                        </div>
                    </div>
                    <div>
                        <button id="Compra">Comprar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DetalleProducto;