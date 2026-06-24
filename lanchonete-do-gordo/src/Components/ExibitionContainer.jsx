import '../styles/ExibitionContainer.css'
import TablesAndComands from './TablesAndComands';

function ExibitionContainer(){

    return(
        <div className="exibition-container">

            <div className="div-mesas">
                
                    <div className="tables-and-comands">
                        <TablesAndComands />
                    </div>
                
            </div>

            <button className="add-table">Adicionar uma mesa</button>

        </div>
    )
}

export default ExibitionContainer;