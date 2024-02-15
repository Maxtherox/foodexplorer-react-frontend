import { Container, Form, Section } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer"
import { ButtonBack } from "../../Components/ButtonBack";
import { Input } from "../../Components/Input";
import upload from "../../assets/icons/upload.svg"
import { Button } from "../../Components/Button";
import { FoodItem } from "../../Components/FoodItem";
export function New(){
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
                                <label htmlFor="uploadFile" className="">Imagem do prato</label>
                                <input 
                                    className="hiddenUploadFile"
                                    type="file"
                                    id="uploadFile"
                                    name="uploadFile"
                                />
                                <label htmlFor="uploadFile" className="uploadFile"><img src={upload} alt="" />Selecione imagem</label>
                           </div>
                        <div>                    
                        <label htmlFor="name">Nome</label>
                            <Input
                                type="text"
                                placeholder="Ex.: Salada Ceasar"
                                name="name"
                                className="name"
                            />
                        </div>
                        <div>
                        <label htmlFor="category">Categoria</label>
                        <select name="category" id="category" className="category">
                            <option value="javascript">JavaScript</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                            <option value="golang">Golang</option>
                            <option value="python">Python</option>
                            <option value="c#">C#</option>
                            <option value="C++">C++</option>
                            <option value="erlang">Erlang</option>
                        </select>
                        </div>
                        
                        </Section> 

                        <Section>
                        <div>
                            <label htmlFor="ingredients">Ingredientes</label>
                            <div className="ingredients">
                                <div className='tags'>
                                    <FoodItem value="Pão Naan"/>
                                    <FoodItem isnew placeholder="Nova tag"/>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <label htmlFor="price">Preço</label>
                            <Input
                                type="number"
                                min="1"
                                step="any"
                                placeholder ="R$ 00,00"
                                className="price"
                            />
                        </div>                          
                        </Section>
                        <Section>
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <textarea name="Descrição" id="description" className="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" ></textarea>
                            </div>  
                        </Section>
                    </fieldset>
                    <section>
                    <Button title="Salvar alterações"/>
                    </section>
                    
                </Form>
                </main>
            <Footer/>
        </Container>
    )
}