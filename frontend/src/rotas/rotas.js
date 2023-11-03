import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Erro from '../paginas/Erro/Erro';
import Login from '../paginas/Login/Login'
import Home from '../paginas/Home/Home';
import SignupPage from '../paginas/SignupPage/SignupPage';



function Rotas(){
    return(
        <>

        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                {/* <Route path="home" element={<Home news={props.news} setNews={props.setNews}/>}/> */}
                <Route path="cadastrar" element={<SignupPage/>}/>
                <Route path="entrar" element={<Login/>}/> 
                <Route path="*" element={<Erro/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}

export default Rotas