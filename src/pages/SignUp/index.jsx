import { Container, Form, LogoDesktop } from "./styles";
import logo from "../../assets/logo.png"
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link, useNavigate  } from 'react-router-dom'
import { useState } from 'react'
import { api } from "../../services/api"


export function SignUp(){
	const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate()
    function handleSignUp(){
            if(!name || !email || !password){
            return alert("Preencha todos os campos!")
            }

            setLoading(true);

             api.post("/users", {name, email, password})
             .then(() => { 
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível cadastrar")
                }
            } )
            .finally(() => {
                setLoading(false);
              });
    
        }        
    return (
        <Container>
            <LogoDesktop>
            <h1><img src={logo} alt=""/>food explorer </h1>
            </LogoDesktop>
            

            <Form>      
            <h1><img src={logo} alt=""/>food explorer </h1>
                <fieldset>   
            
                <legend>Crie sua conta</legend>
                <label htmlFor="name">Seu nome</label>
                <Input
                placeholder="Exemplo: Maria da Silva"
                type="text"
                id="name"
                onChange={e => setName(e.target.value)}
                />

                <label htmlFor="email">Email</label>
                <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
                type="text"
                id="email"
                onChange={e => setEmail(e.target.value)}
                />         

                <label htmlFor="password">Senha</label>    
                <Input
                placeholder="No mínimo 6 caracteres"
                type="password"
                id="password"
                minLength= "6"
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Criar conta" onClick={handleSignUp} loading={loading}></Button>
                <Link to="/" href="#"> Já tenho uma conta</Link>
                </fieldset>
            </Form>
            
        </Container>
    )
}