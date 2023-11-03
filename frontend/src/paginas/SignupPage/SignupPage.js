import { useData } from "../../hooks/useData";
import { useTokenNotNull } from "../../hooks/useTokenNotNull";


const SignupPage = () => {
    
    // const [form, onChangeForm] = useForm({nome:'', email:'', password:''})
    const {form, onChangeForm,handleSubmit, message} = useData({username:'', password:'', email:''}, '/user/signup')

    useTokenNotNull()

    return(
        <>
        <form onSubmit={handleSubmit}>

            <input placeholder="Nome"
                name="username"
                type="text"
                // value={form.username}
                onChange={onChangeForm}
            />
            <input placeholder="E-mail"
                name="email"
                type="email"
                // value={form.email}
                onChange={onChangeForm}
            />
            <input placeholder="Senha"
                name="password"
                type="password"
                // value={form.password}
                onChange={onChangeForm}    
            />

            {message && <p>{message}</p>}

            <button type="submit">Cadastrar</button>
            
        </form>
        </>




    )
}

export default SignupPage