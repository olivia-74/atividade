import useForm from "../../hooks/useForm"
import { useUserOperations } from "../../hooks/useUserOperations";


const SignupPage = () => {
    
    // const [form, onChangeForm] = useForm({nome:'', email:'', password:''})
    const {form, onChangeForm, handleSubmit} = useUserOperations({nome:'', email:'', password:''}, 'user/signup')


    return(
        <>
        <form onSubmit={handleSubmit}>

            <input placeholder="Nome"
                name="username"
                type="text"
                value={form.username}
                onChange={onChangeForm}
            />
            <input placeholder="E-mail"
                name="email"
                type="email"
                value={form.email}
                onChange={onChangeForm}
            />
            <input placeholder="Senha"
                name="password"
                type="password"
                value={form.password}
                onChange={onChangeForm}    
            />

            <button type="submit">Cadastrar</button>
            
        </form>
        </>
    )
}

export default SignupPage