import { FiPlus } from "react-icons/fi";

import { Container, Content, NewNote} from "./styles";

import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function Home(){
    return(
        <Container>
            <Header/>
            <Content>
                <div class="head-home">
                      <h1>Meus filmes</h1>
                        <NewNote to="/new">
                            <FiPlus/>
                            Adicionar filme
                        </NewNote>
                </div>

                
                <Link to="/details">
                    <Note data={{ 
                            title: 'Divertidamente',

                            description: 'Crescer pode ser um desafio, e não é exceção para Riley, que é arrancada da sua vida no Minnesota quando o pai arranja um novo emprego em São Francisco. Como todos nós, Riley é guiada pelas suas emoções: Alegria, Medo, Raiva, Repulsa e Tristeza. As emoções vivem no Quartel-general, o centro de controlo da mente de Riley, onde ajudam a encaminhá-la no dia a dia. Apesar de Alegria, a emoção principal e mais importante de Riley, tentar manter tudo positivo, as emoções entram em conflito sobre como navegar por uma nova cidade, uma nova casa e uma nova escola.',
                            tags: [
                                { id: '1', name: "animação"},
                                { id: '2', name: "drama"}
                            ]
                        }} 

                        />
                </Link>

                    <Note data={{ 
                        title: 'Divertidamente',

                        description: 'Crescer pode ser um desafio, e não é exceção para Riley, que é arrancada da sua vida no Minnesota quando o pai arranja um novo emprego em São Francisco. Como todos nós, Riley é guiada pelas suas emoções: Alegria, Medo, Raiva, Repulsa e Tristeza. As emoções vivem no Quartel-general, o centro de controlo da mente de Riley, onde ajudam a encaminhá-la no dia a dia. Apesar de Alegria, a emoção principal e mais importante de Riley, tentar manter tudo positivo, as emoções entram em conflito sobre como navegar por uma nova cidade, uma nova casa e uma nova escola.',
                        tags: [
                            { id: '1', name: "animação"},
                            { id: '2', name: "drama"}
                        ]
                    }} 

                    />
               
            </Content>


        </Container>
    )
}