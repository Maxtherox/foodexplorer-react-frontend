import { Container } from "./styles";
import logo from "../../assets/footer_logo.svg"

export function Footer(){
    return(
        <Container>    
            <span className="logo"><img src={logo} alt=""/>  food explorer </span>
            <span className="Copyright">© 2023 - Todos os direitos reservados.</span>         
        </Container>
    )
}
