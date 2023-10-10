import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Erro from '../paginas/Erro/Erro';
import Login from '../paginas/Login/Login'
import Home from '../paginas/Home/Home';



function Rotas(props){
    return(
        <>

        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="home" element={<Home news={props.news} setNews={props.setNews}/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}

export default Rotas