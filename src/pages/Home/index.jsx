import { Container, Main, Banner } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import Maskgroup from "../../assets/maskgroup.png"

export function Home(){
    return(
        <Container>
            <Header/>
                <Main>
                    <Banner id="container-group">
                        <img src={Maskgroup} className=""alt="" />
                        <div>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </Banner>
                </Main>
            <Footer/>
        </Container>
    )
}