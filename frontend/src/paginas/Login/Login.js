import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Cabecalho, Card, Container, Footer } from "./styledLogin";
import useForm from "../../hooks/useForm";
import { useUserOperations } from "../../hooks/useUserOperations";


function Login() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [form, onChangeForm] = useForm({nome: '', password: ''})
    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:'', password:''}, 'user/login')

    // const navigate = useNavigate();


    // const saveUserInfoLocalStorage = (token) =>{
    //     localStorage.setItem('token', token)
    //     localStorage.setItem('email', email)
    // }

    // const handleSubmit = (event) =>{
    //     event.preventDefault()

    //     const credentials = {email, password}

    //     axios.post('http://localhost:8000/login', credentials, {
    //         headers:{
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(response => {
    //         alert(response.data.message)
    //         saveUserInfoLocalStorage(response.data.token)
    //         navigate('home')
    //     })
    //     .catch(error => console.log(error))
    // }


    return (
        <>
        <Container>
            
            <Card>
                
                <h1>Entrar</h1>
                <form onSubmit={handleSubmit}>

                <label>E-mail:</label>
                <input type="text" 
                    placeholder="Nome"
                    name='nome'
                    value={form.nome} 
                    onChange={onChangeForm}
                />

                <label>Senha:</label>
                <input type="password" 
                    placeholder="Senha"
                    name='password'
                    value={form.password} 
                    onChange={onChangeForm}
                />

                <button type="submit">Entrar</button>
                
                </form>
                
            </Card>
           
        </Container>
        </>
    )
}
export default Login;


{/* <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/> 
<input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/> */}
