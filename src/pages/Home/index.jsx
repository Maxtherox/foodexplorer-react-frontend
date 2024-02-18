import { Container, Main, Banner } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import Maskgroup from "../../assets/maskgroup.png"
import { Section } from "../../Components/Section";
import { Sliderfood } from "../../Components/Sliderfood";
import { CardFood } from "../../Components/CardFood";
import spaguetti from "../../assets/foods/spaguetti.png";
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from "../../utils/roles";
import { api } from '../../services/api';
import { useState, useEffect } from 'react';


export function Home(){

    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchFoods() {
            try {
                const response = await api.get(`/foods?name=${search}&withCategories=true`);
                setFoods(response.data);
            } catch (error) {
                console.error('Erro ao buscar alimentos:', error);
            }
        }
    
        fetchFoods();
    }, [search]);
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
                    {
                        foods
                            .filter(food => 
                                food.categories && 
                                food.categories.some(category => category.name === "sobremesas")
                            )
                            .map(food => (
                                <CardFood  
                                    key={String(food.id)}
                                    data={food}
                                />
                            ))
                    }            
                      </Section>
              
                </Main>
            <Footer/>
        </Container>
    )
}