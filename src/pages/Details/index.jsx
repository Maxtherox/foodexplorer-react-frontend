import { Container, Content, Section, Tags, DivButton } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import dish from "../../assets/icons/Dish.png"
import { Tag } from "../../Components/Tag";
import {ButtonBack} from "../../Components/ButtonBack";
import { Increaser } from "../../Components/Increaser";
import { Button } from "../../Components/Button";

export function Details(){
    return(
        <Container>
            <Header/>
            
            
            
                <main>
                <DivButton>
                <ButtonBack/>
            </DivButton>
                    <Content>
                        <img src={dish} alt="" />                       
                        <Section>
                            <h1>Salada Ravanello</h1>
                            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                            <Tags>
                                <Tag title="alface"/>
                                <Tag title="cebola"/>
                                <Tag title="pão naan"/>
                                <Tag title="pepino"/>
                                <Tag title="rabanete"/>
                                <Tag title="tomate"/>                                  
                            </Tags>
                            <span><Increaser></Increaser><Button title="incluir ∙ R$ 25,00" /></span>
                            
                        </Section>                        
                    </Content>
                </main>
            <Footer/>
        </Container>
    )
}