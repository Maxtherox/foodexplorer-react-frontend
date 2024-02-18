import { Container, Form, Section } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer"
import { ButtonBack } from "../../Components/ButtonBack";
import { Input } from "../../Components/Input";
import upload from "../../assets/icons/upload.svg"
import { Button } from "../../Components/Button";
import { FoodItem } from "../../Components/FoodItem";
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

export function New(){

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState("");

    function handleAddIngredient(){     
        if (newIngredient.trim() !== "") {
            setIngredients(prevState => [...prevState, newIngredient]);
            setNewIngredient("");
          } else {
            alert("Por favor, insira um ingrediente antes de adicionar.");
          }     
    }
    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted) )

    }
    const navigate = useNavigate();
    
    const [avatar, setAvatar] = useState(null);

    async function handleNewFood() {
        if (!avatar) {
            console.log(avatar)
            return alert("Erro: Você não inseriu uma imagem para o prato!");
        }
        
        if (!name) {
            return alert("Erro: Você não informou o nome do prato!");
        }

        if (ingredients.length < 1) {
            return alert("Erro: Adicione pelo menos um ingrediente!")
        }

        if (newIngredient) {
            return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
        }

        if (!categories) {
            return alert("Erro: Você não selecionou a categoria do prato!");
        }

        if (!price) {
            return alert("Erro: Você não informou o preço do prato!");
        }

        if (!description) {
            return alert("Erro: Você não informou uma descrição para o prato!");
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("avatar", avatar);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("categories", categories);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        await api
            .post("/foods", formData)
            .then(alert("Prato adicionado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao criar o prato!");
                }
            });  

        setLoading(false);
    }



/*
    async function handleNewFood(){
        
        if (!name){
            return alert("Digite o titulo da nota")
        }
        if(newIngredient){
            return alert("Tag não adicionada, clique em adicionar ou deixe o campo vazio.")
        }

        
            await api.post("/foods", {
                name,
                description,
                price,
                avatar,
                ingredients,
                categories
            },{withCredentials: true})
        
            alert("Nota criada com sucesso!");
            navigate(-1);

    }

*/
    return(
        <Container>
            <Header/>
                <main>
                <ButtonBack/>
                <Form>
                    <fieldset>
                        <legend>Adicionar prato</legend>

                        <Section>
                            <div>
                                <label htmlFor="avatar" className="">Imagem do prato</label>
                                <input 
                                    className="hiddenUploadFile"
                                    type="file"
                                    id="avatar"
                                    name="uploadFile"
                                    accept="image/*" 
                                    onChange={e => setAvatar(e.target.files[0])}
                                />
                                <label htmlFor="avatar" className="uploadFile"><img src={upload} alt="" />Selecione imagem</label>
                           </div>
                        <div>                    
                        <label htmlFor="name">Nome</label>
                            <Input
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                onChange={e => setName(e.target.value)}
                                name="name"
                                className="name"
                            />
                        </div>
                        <div>
                        <label htmlFor="category">Categoria</label>
                        <select name="category" defaultValue={'default'} id="category" className="category" onChange={e => setCategories(e.target.value)}>
                            <option value="default" disabled>Selecione a categoria</option>
                            <option value="refeicoes">Refeições</option>
                            <option value="sobremesas">Sobremesas</option>
                            <option value="bebidas">Bebídas</option>
                            <option value="principais">Pratos principais</option>
                            <option value="salada">Salada</option>
                        </select>
                        </div>
                        
                        </Section> 

                        <Section>
                        <div>
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="ingredients">
                                <div className='tags'>
                                {
                                    ingredients.map((ingredient, index) => 
                                    (
                                        <FoodItem 
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                    ))
                                }    
                                    <FoodItem 
                                    isnew 
                                    placeholder="Nova tag"
                                    onChange={e => setNewIngredient(e.target.value)}
                                    value={newIngredient}
                                    onClick={handleAddIngredient}
                                    />
                                
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="price">Preço</label>
                            <Input
                                type="number"
                                step="any"
                                onChange={e => setPrice(parseFloat(e.target.value))}
                                placeholder ="R$ 00,00"
                                className="price"
                            />
                        </div>                          
                        </Section>
                        <Section>
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <textarea 
                                    name="Descrição" 
                                    id="description"  
                                    className="description" 
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>  
                        </Section>
                    </fieldset>
                    <section>
                    
                    <Button title="Salvar alterações" onClick={handleNewFood} loading={loading}/>
                    </section>
                    
                </Form>
                </main>
            <Footer/>
        </Container>
    )
}