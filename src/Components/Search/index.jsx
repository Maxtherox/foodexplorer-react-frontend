import { Container } from "./styles";
import { Input } from "../Input";
import { MagnifyingGlass } from "@phosphor-icons/react";


export function Search(){
    return(
        <Container>
            <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            />
           
        </Container>
    )
}