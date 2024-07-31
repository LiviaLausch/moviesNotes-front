import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import  avatarPlaceHolder  from "../../assets/avatar_placeholder.jpg";

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import { LuClock4 } from "react-icons/lu";
import { Stars } from "../../components/Stars";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const { user } = useAuth();

  const  avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate (-1);
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return (

    <Container>
      <Header/>
      <div class="custom-scrollbar">

    {
      data &&
      <main>
        <Content>
            <div className="command">
                <Link 
                  onClick={handleBack}
                >
                  <FiArrowLeft/>
                    Voltar
                </Link>

                <ButtonText 
                    title="Excluir nota"
                    onClick={handleRemove}
                  />
            </div>
              

                <div class="head">
                  <h1>{data.title}</h1>
                  <Stars rating={data.rating}/>
                </div>

                <div className="details"> 
                  <div id="perfil">
                    <img 
                        src={avatarUrl}
                        alt={user.name}
                      />
                  </div>
                  <p>Por &nbsp; <span>{user.name}</span></p>
                  <span> 
                    <LuClock4/> 
                    <p>{new Date(data.created_at).toLocaleDateString('pt-br')}</p>
                  </span>
                </div>
              {
                data.tags &&
                <div className="tags">
                { 
                  data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                ))
                }
                </div>
              }

                <p>
                 {data.description}
                </p>



        </Content>
      </main>
    }
     
  </div>
    </Container>




  )
}