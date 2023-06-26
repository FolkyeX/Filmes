import { Link } from "react-router-dom";
import './Erro.css';


function Erro(){
    return(
        <div className="Not-Found">
            <h1>404</h1>
            <h2>Pagina não encontrada</h2>
            <Link to='/'>Filmes em cartaz</Link>
        </div>
    );
}

export default Erro;