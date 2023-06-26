import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../Services/api";
import './Filme-Info.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";



function Filme(){
    const{ id } = useParams();
    const navigate = useNavigate();
    const [filme,setFilme] = useState({});
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        async function loadFilmes(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:'345479cb930369b85a569088034d06b9',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false);
            })
            .catch(()=>{
                navigate('/',{replace: true});
                return;
            })
        }

        loadFilmes();

        return() => {
            console.log(" desmontado ")
        }
    }, [navigate, id])


    function salvarFilme(){
        const minhaLista = localStorage.getItem("@FlixForc");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo)=> filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Opa! Esse filme já está em sua lista ;D")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@FlixForc", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo !")

    }


    if(loading){
        return(
            <div className="Filme-Info">
                <h1>...CARREGANDO DETALHES...</h1>
            </div>
        )
    }

    return(
        <div className="Filme-Info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinópse</h3>
            <span>{filme.overview}</span>
            <strong>Lançamento: {filme.release_date}</strong>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="Button-Area">
                <button onClick={salvarFilme}>Favoritar</button>
                <button><a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Veja o Trailer no Youtube</a></button>
                <Link className='buttonL' to='/'>Voltar</Link>

            </div>

        </div>
    )
}

export default Filme;
