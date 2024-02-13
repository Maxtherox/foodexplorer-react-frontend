import { Container, Main, Banner } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import Maskgroup from "../../assets/maskgroup.png"
import { Section } from "../../Components/Section";
import { Sliderfood } from "../../Components/Sliderfood";
import { CardFood } from "../../Components/CardFood";
import spaguetti from "../../assets/foods/spaguetti.png";

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
                        
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        /><CardFood  
                        image={spaguetti}
                        title="Spaguetti Gambe"
                        description="Massa fresca com camarões e pesto."
                        price="R$ 179,97"
                    /><CardFood  
                    image={spaguetti}
                    title="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto."
                    price="R$ 179,97"
                /><CardFood  
                image={spaguetti}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 179,97"
            /><CardFood  
            image={spaguetti}
            title="Spaguetti Gambe"
            description="Massa fresca com camarões e pesto."
            price="R$ 179,97"
        /><CardFood  
        image={spaguetti}
        title="Spaguetti Gambe"
        description="Massa fresca com camarões e pesto."
        price="R$ 179,97"
    /><CardFood  
    image={spaguetti}
    title="Spaguetti Gambe"
    description="Massa fresca com camarões e pesto."
    price="R$ 179,97"
/><CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />

                      </Section>
                    <Section title="Refeições">
                        
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        /><CardFood  
                        image={spaguetti}
                        title="Spaguetti Gambe"
                        description="Massa fresca com camarões e pesto."
                        price="R$ 179,97"
                    /><CardFood  
                    image={spaguetti}
                    title="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto."
                    price="R$ 179,97"
                /><CardFood  
                image={spaguetti}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 179,97"
            /><CardFood  
            image={spaguetti}
            title="Spaguetti Gambe"
            description="Massa fresca com camarões e pesto."
            price="R$ 179,97"
        /><CardFood  
        image={spaguetti}
        title="Spaguetti Gambe"
        description="Massa fresca com camarões e pesto."
        price="R$ 179,97"
    /><CardFood  
    image={spaguetti}
    title="Spaguetti Gambe"
    description="Massa fresca com camarões e pesto."
    price="R$ 179,97"
/><CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />

                      </Section>
                    <Section title="Refeições">
                        
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />
                        <CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        /><CardFood  
                        image={spaguetti}
                        title="Spaguetti Gambe"
                        description="Massa fresca com camarões e pesto."
                        price="R$ 179,97"
                    /><CardFood  
                    image={spaguetti}
                    title="Spaguetti Gambe"
                    description="Massa fresca com camarões e pesto."
                    price="R$ 179,97"
                /><CardFood  
                image={spaguetti}
                title="Spaguetti Gambe"
                description="Massa fresca com camarões e pesto."
                price="R$ 179,97"
            /><CardFood  
            image={spaguetti}
            title="Spaguetti Gambe"
            description="Massa fresca com camarões e pesto."
            price="R$ 179,97"
        /><CardFood  
        image={spaguetti}
        title="Spaguetti Gambe"
        description="Massa fresca com camarões e pesto."
        price="R$ 179,97"
    /><CardFood  
    image={spaguetti}
    title="Spaguetti Gambe"
    description="Massa fresca com camarões e pesto."
    price="R$ 179,97"
/><CardFood  
                            image={spaguetti}
                            title="Spaguetti Gambe"
                            description="Massa fresca com camarões e pesto."
                            price="R$ 179,97"
                        />

                      </Section>
              
                </Main>
            <Footer/>
        </Container>
    )
}