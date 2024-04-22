export default function SearchBar(){
    return(
        <>
            <input className="border-solid border-b-2 rounded-sm border-gray-600 outline-none w-36 font-light italic" type="text" placeholder="Buscar" />
            <div className="absolute right-16">
                <img src="src/assets/mdi_search.svg" alt="Search" className="w-6 h-6"/>
            </div>
        </>
    )
}