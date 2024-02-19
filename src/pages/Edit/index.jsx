import { Container, Form, Section } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer"
import { ButtonBack } from "../../Components/ButtonBack";
import { Input } from "../../Components/Input";
import upload from "../../assets/icons/upload.svg"
import { Button } from "../../Components/Button";
import { FoodItem } from "../../Components/FoodItem";
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

export function Edit(){

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const { user } = useAuth()
    const params = useParams();
    const [data, setData] = useState(null);

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

    const [avatar, setAvatar] = useState();

    async function handleNewFood() {

        if (!name) {
            return alert("Erro: Você não informou o nome do prato!");
        }

        if (ingredients.length < 1) {
            return alert("Erro: Adicione pelo menos um ingrediente!")
        }

        if (newIngredient) {
            return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
        }

        if (!category) {
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

        if (avatar) {
            formData.append("avatar", avatar);
        }

        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);

        ingredients.map(ingredient => (
            formData.append("ingredients", ingredient)
        ))

        await api
            .put(`/foods/${params.id}`, formData)
            .then(alert("Prato editado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao editar o prato!");
                }
            });  

        setLoading(false);
    }

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods/${params.id}`);
            setData(response.data);
            
            const { name, description, category, price, ingredients } = response.data;
            setName(name);
            setDescription(description);
            setCategory(category);
            setPrice(price);
            setIngredients(ingredients.map(ingredient => ingredient.name));
        }
    
        fetchFood();
    }, [])

    async function handleRemoveFood() {
        setLoading(true);
        const isConfirm = confirm("Tem certeza que deseja remover este item?");
    
        if(isConfirm) {
            await api.delete(`/foods/${params.id}`)
            .then(() => {
                alert("Item removido com sucesso!");
                navigate("/");
                setLoading(false);;
            })
        } else {
            return
        }
    }

    return(
        <Container>
            <Header/>
                <main>
                <ButtonBack/>
                <Form>
                    <fieldset>
                        <legend>Editar prato</legend>

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
                                value={name}
                            />
                        </div>
                        <div>
                        <label htmlFor="category">Categoria</label>
                        <select name="category" defaultValue={category} id="category" className="category" onChange={e => setCategory(e.target.value)}>
                            <option value="default" disabled>Selecione a categoria</option>
                            <option value="meals">Refeições</option>
                            <option value="desserts">Sobremesas</option>
                            <option value="drinks">Bebídas</option>
                            <option value="principals">Pratos principais</option>
                            <option value="salads">Saladas</option>
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
                                value={price}
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
                                    value={description}
                                    className="description" 
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                                    onChange={e => setDescription(e.target.value)}
                                >
                                </textarea>
                            </div>  
                        </Section>
                    </fieldset>
                    <section>
                    
                    <Button className="excButton" title="excluir" onClick={handleRemoveFood} loading={loading}/>
                    <Button className="savButton" title="Salvar alterações" onClick={handleNewFood} loading={loading}/>
                    </section>
                    
                </Form>
                </main>
            <Footer/>
        </Container>
    )
}