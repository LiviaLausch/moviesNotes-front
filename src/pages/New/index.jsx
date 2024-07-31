import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header  } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api"

import { Container, Form } from "./styles"

export function New(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0); 

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState("");

    const navigate = useNavigate();


    function handleBack(){
        navigate(-1);
    }

    function handleAddTag() {
        // Verifica se a tag contém apenas letras
        const isAlpha = /^[A-Za-z]+$/.test(newTag);

        if (!isAlpha) {
            return alert("A tag deve conter apenas letras!");
        }

        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){

        if(tags.length === 0){
            return alert("Adicione pelo menos uma tag para criar uma nova nota!")
        }

        if(!title){
            return alert("Digite o título da nota!")
        }

        if(rating < 1 || rating > 5) {
            return alert("A sua avaliação precisa ser de 1 a 5!")
        }

        if(newTag) {
            return alert("Clique para adicionar a nova tag ou deixe o campo vazio!")
        }


        await api.post("notes", {
            title,
            description,
            rating,
            tags
        });

        alert("Nota criada com sucesso!")
        handleBack();
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}
                        />
                        <h1>Novo filme</h1>
                    </header>
                    <div id="title-rading">
                        <Input 
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number"  
                            min={0}  
                            max={5}
                            onChange={e => setRating(Number(e.target.value))}
                        />
                    </div>
                    <Textarea 
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                        <h1>Marcadores</h1>
                        <div className="tags">
                            {
                                tags.map((tag, index) =>(
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                                ))
                            }

                            <NoteItem 
                                isNew
                                placeholder="Nova tag" 
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}

                            />
                        </div>
                    

                    <div id="buttons-new">
                        <button id="delete">Excluir filme</button>
                        <Button 
                            title="Salvar alterações" 
                            onClick={handleNewNote}
                            />
                    </div>
                </Form>
            </main>
        </Container>
    )
}