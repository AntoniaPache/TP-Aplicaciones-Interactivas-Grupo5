import provincias from '../data/provincias.json'

export default function CheckOut() {

      
    return (
        <div className="flex flex-col justify-center items-center">
            <h1>CheckOut</h1>
            <div className="w-3/4 flex flex-col justify-center items-center border-2 my-2">
                <div className="flex flex-col justify-start items-start">
                    <h2>Datos de contacto</h2>
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-left">
                        <h3 className="">Nombre</h3> 
                        <input type="text" className="w-full" />
                    </label>
                    <label htmlFor="" className="block text-left">
                        <h3 className="">Apellido </h3>
                        <input type="text" className="w-full" />
                    </label>
                    <label htmlFor="" className="block text-left">
                        <h3>Telefono</h3>
                        <input type="text" className="w-full" />
                    </label>
                    <label htmlFor="" className="block text-left">
                        <h3>Correo</h3> 
                        <input type="text" className="w-full" />
                    </label>
                </div>
                
            </div>

            <div className="w-3/4 flex flex-col justify-center items-center border-2 my-2">
                <div className="flex flex-col justify-start items-start">
                    <h2>Datos de entrega</h2>
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-left">Provincia</label>
                    <select name="provincia" id="provincia" className="w-full">
                        <option value="">Selecciona una provincia</option>
                        {provincias.map((p, index) => (
                            <option key={index} value={p.provincia}>{p.provincia}</option>
                        ))}
                    </select>
                    <label htmlFor="" className="block text-left">Localidad</label>
                    <select name="provincia" id="provincia" className="w-full">
                        <option value="">Selecciona una provincia</option>
                        {provincias[0].localidades.map((localidad, index) => (
                            <option key={index} value={localidad}>{localidad    }</option>
                        ))}
                    </select>
                    <label htmlFor="" className="block text-left">Calle</label>
                    <input type="text" className="w-full" />

                    <label htmlFor="" className="block text-left">Altura</label>
                    <input type="text" className="w-full" />

                    <label htmlFor="" className="block text-left">
                        <h3>Correo</h3> 
                        <input type="text" className="w-full" />
                    </label>
                </div>
                
            </div>
        </div>
    )
}