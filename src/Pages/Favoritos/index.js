import { useEffect, useState } from 'react';
import './Favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@FlixForc");
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item)=> {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@FlixForc", JSON.stringify(filtroFilmes))
        toast.success("Filme Removido !")
    }


    return(
        <div className='Meus-Filmes'>
            <h1>Filmes Favoritos</h1>

            {filmes.length === 0 && <span> Você não tem nenhum filme favorito ainda...
                <Link className='VoltarFilmes' to='/'>Ver Filmes</Link>
                </span>}
            
            
            

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link className='btfL' to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button className='btf' onClick={() => excluirFilme(item.id)}>Excluir da Lista</button>
                                <Link className='btfLV' to={`/`}>Ver Todos os Filmes</Link>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;