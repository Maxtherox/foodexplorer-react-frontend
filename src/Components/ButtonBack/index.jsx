import { Container } from "./styles";
import leftarrow from "../../assets/icons/leftarrow.svg"

export function ButtonBack(){
    return(
        <Container>
            <img src={leftarrow} alt="" />voltar
        </Container>
    )
}