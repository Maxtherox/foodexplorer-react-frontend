import { Container, Form, LogoDesktop } from "./styles";
import logo from "../../assets/logo.png"
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from 'react-router-dom'



export function SignUp(){
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
                />

                <label htmlFor="email">Email</label>
                <Input
                placeholder="Exemplo: exemplo@exemplo.com.br"
                type="text"
                id="email"
                />         

                <label htmlFor="password">Senha</label>    
                <Input
                placeholder="No mínimo 6 caracteres"
                type="password"
                id="password"
                minLength= "6"
                />

                <Button title="Criar conta"></Button>
                <a to="/" href="#"> Já tenho uma conta</a>
                </fieldset>
            </Form>
            
        </Container>
    )
}