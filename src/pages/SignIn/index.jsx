import { Container, Form, LogoDesktop } from "./styles";
import logo from "../../assets/logo.png"
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    const {signIn} = useAuth();

    function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);

    signIn({ email, password })
      .finally(() => {
        setLoading(false);
      });
  }
    return(
        <Container>
              <LogoDesktop>
            <h1><img src={logo} alt=""/>food explorer </h1>
            </LogoDesktop>
            

            <Form>      
            <h1><img src={logo} alt=""/>food explorer </h1>
                <fieldset>   
            
                <legend>Faça login</legend>

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

                <Button title="Entrar" onClick={handleSignIn} loading={loading}></Button>
                <Link to="/register" href="#" > Crie uma conta</Link>
                </fieldset>
            </Form>
        </Container>
    )
}