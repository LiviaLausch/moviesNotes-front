import { Header  } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"


import { Container, Form } from "./styles"

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <FiArrowLeft/>
                            Voltar</Link>
                        <h1>Novo filme</h1>
                    </header>
                    <div id="title-rading">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>

                        <h1>Marcadores</h1>
                        <div className="tags">
                            <NoteItem value="Terror"/>
                            <NoteItem value="Nova tag" isNew/>
                        </div>
                    

                    <div id="buttons-new">
                        <button id="delete">Excluir filme</button>
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
        </Container>
    )
}