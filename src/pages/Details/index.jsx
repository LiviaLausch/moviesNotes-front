import { Container, Content } from "./styles";

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import {Stars} from ".././../components/Stars";
import { LuClock4 } from "react-icons/lu";

export function Details() {

  return (

    <Container>
      <Header/>
      <div class="custom-scrollbar">

      <main>
        <Content>
            <div className="command">
                <Link to="/">
                  <FiArrowLeft/>
                    Voltar
                </Link>

                <ButtonText title="Excluir nota"/>
            </div>
              

                <div class="head">
                  <h1>Divertida Mente</h1>
                  <Stars/>
                </div>

                <div className="details"> 
                  <div id="perfil">
                    <img src="https://github.com/livialausch.png" alt="foto perfil" />
                  </div>
                  <p>Por Livia Lausch</p>
                  <span> 
                    <LuClock4/> 
                    <p>23/05/22 às 08:00</p>
                  </span>
                </div>

                <div className="tags">
                  <Tag title="animação"/>
                  <Tag title="infantil"/>
                  <Tag title="comédia dramatica"/>
                </div>

                <p>
                  Riley é uma garota divertida de 11 anos de idade, que deve enfrentar mudanças 
                  importantes em sua vida quando seus pais decidem deixar a sua cidade natal, 
                  no estado de Minnesota, para viver em San Francisco. Dentro do cérebro de Riley, 
                  convivem várias emoções diferentes, como a Alegria, o Medo, a Raiva, o Nojinho e a Tristeza. 
                  A líder deles é Alegria, que se esforça bastante para fazer com que a vida de Riley seja sempre feliz. 
                  Entretanto, uma confusão na sala de controle faz com que ela e Tristeza sejam expelidas para fora do local. 
                  Agora, elas precisam percorrer as várias ilhas existentes nos pensamentos de Riley para que possam 
                  retornar à sala de controle - e, enquanto isto não acontece, a vida da garota muda radicalmente.
                </p>



        </Content>
      </main>
     
  </div>
    </Container>




  )
}