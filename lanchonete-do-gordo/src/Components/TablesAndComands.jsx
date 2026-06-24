import '../styles/TablesAndComands.css'
function TablesAndComands({tables}){
    
    
    
    return(
        <div className="tables">
            <strong>Mesa {tables.number}</strong>
            {tables.name && <p>{tables.name}</p>}
            {tables.comands.length > 0 && (
                <p>Comandas: {tables.comands.join(", ")}</p>
            )}
        </div>
    )
}

export default TablesAndComands