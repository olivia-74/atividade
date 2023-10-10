import { useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "../../componentes/Card/Card";
import { Container } from "./styledHome";

function Home(props){

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
        <>
        <Container>
            <div>
                <Card news={props.news} setNews={props.setNews}/>
                <button onClick={handleLogout}> Logout </button>
            </div>
            
        </Container>
        </>
    )
}

export default Home;