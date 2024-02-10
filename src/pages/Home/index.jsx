import { Container, Main, Banner } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import Maskgroup from "../../assets/maskgroup.png"
import { Section } from "../../Components/Section";
import spaguetti from "../../assets/foods/spaguetti.png"

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
                    <Section title="Refeições">
                        <div>
                            <img src={spaguetti} alt="" />
                            <h2>Spaguetti Gambe</h2>
                            <p>Massa fresca com camarões e pesto. </p>
                            <a href="">-</a>
                            <a href="">+</a>
                            <span>01</span>
                            <button>incluir</button>
                        </div>
                        <div>
                            <img src={spaguetti} alt="" />
                            <h2>Spaguetti Gambe</h2>
                            <p>Massa fresca com camarões e pesto. </p>
                            <a href="">-</a>
                            <a href="">+</a>
                            <span>01</span>
                            <button>incluir</button>
                        </div>
                        <div>
                            <img src={spaguetti} alt="" />
                            <h2>Spaguetti Gambe</h2>
                            <p>Massa fresca com camarões e pesto. </p>
                            <a href="">-</a>
                            <a href="">+</a>
                            <span>01</span>
                            <button>incluir</button>
                        </div>
                    </Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                    <Section title="Refeições"></Section>
                </Main>
            <Footer/>
        </Container>
    )
}