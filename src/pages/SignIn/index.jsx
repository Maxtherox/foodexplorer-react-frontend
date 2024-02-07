import { Container, Form, LogoDesktop } from "./styles";
import logo from "../../assets/logo.png"
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

export function SignIn(){
    return(
        <Container>
              <LogoDesktop>
            <h1><img src={logo} alt=""/>food explorer </h1>
            </LogoDesktop>
            

            <Form>      
            <h1><img src={logo} alt=""/>food explorer </h1>
                <fieldset>   
            
                <legend>Crie sua conta</legend>

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
                <a to="/" href="#"> Crie uma conta</a>
                </fieldset>
            </Form>
        </Container>
    )
}