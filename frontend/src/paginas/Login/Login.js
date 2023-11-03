import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";


function Login() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const [form, onChangeForm] = useForm({nome: '', password: ''})

    const {form, onChangeForm, handleSubmit, message} = useData({nome:'', password:''}, '/user/login')

    useTokenNotNull()
    

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>E-mail:</label>
                <input type="text" 
                    placeholder="Nome"
                    name='nome'
                    // value={form.name} 
                    // !!!!!!!!!!!!!!!!!!!!!!!!!!!
                    onChange={onChangeForm}
                />

                <label>Senha:</label>
                <input type="password" 
                    placeholder="Senha"
                    name='password'
                    // value={form.password} 
                    onChange={onChangeForm}
                />

                {message && <p>{message}</p>}

                <button type="submit">Entrar</button>
                
            </form>
         
        </>
    )
}
export default Login;


{/* <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/> 
<input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/> */}
