import { Container } from "./styles";
import leftarrow from "../../assets/icons/leftarrow.svg"
import { Link } from "react-router-dom";

export function ButtonBack(){
    return(
        <Link to="/">
            <Container>           
                <img src={leftarrow} alt="" />voltar
            </Container>
        </Link>
    )
}