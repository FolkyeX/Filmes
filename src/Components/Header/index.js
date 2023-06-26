import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='Logo' to="/">Flix Forc Project</Link>
            <Link className='Favoritos' to="/favoritos">Meus Filmes</Link>
        </header>
    );
}
export default Header;