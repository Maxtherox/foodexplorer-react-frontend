import { Container, Content, Section, Tags, DivButton } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import dish from "../../assets/icons/Dish.png"
import { Tag } from "../../Components/Tag";
import {ButtonBack} from "../../Components/ButtonBack";
import { Increaser } from "../../Components/Increaser";
import { Button } from "../../Components/Button";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

export function Details(){
    const {user} = useAuth();
    
    const navigate = useNavigate();
    
    function handleBack() {
        navigate(-1);
    }

    const [data, setData] = useState(null);
    const params = useParams();

    const imageURL = data && `${api.defaults.baseURL}/files/${data.avatar}`;

      useEffect(() => {
        async function fetchFoodDetail() {
            const response = await api.get(`/foods/${params.id}`);
            setData(response.data);
        }
    
        fetchFoodDetail();
    }, []);

    return(
        <Container>
            <Header/>         
                <main>
                <DivButton>
                <ButtonBack/>
            </DivButton>
                    <Content>
                        <img src={imageURL} alt="" />                       
                        <Section>
                            <h1>{data && data.name}</h1>
                            <p>{data && data.description}</p>
                            <Tags>
                                {
                                  data && data.ingredients.map(ingredient => (
                                        <Tag
                                            key={String(ingredient.id)}
                                            title={ingredient.name}
                                        />
                                    ))
                                    
                                }      
                                                     
                            </Tags>
                            {user.role === USER_ROLE.CUSTOMER &&
                            <span><Increaser/><Button title={`incluir ∙ R$ ${data && data.price}`} /></span>
                            }
                            {user.role === USER_ROLE.ADMIN &&
                            <span className="buttonEdit"><Button title={`Editar prato`}  onClick={() => data && data.id && navigate(`/edit/${data.id}`)}/></span>
                            }
                        </Section>                        
                        
                    </Content>
                </main>
            <Footer/>
        </Container>
    )
}