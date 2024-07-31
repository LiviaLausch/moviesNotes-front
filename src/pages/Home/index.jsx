import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { FiPlus } from "react-icons/fi";
import  avatarPlaceHolder  from "../../assets/avatar_placeholder.jpg"

import { Container, Content, Search, NewNote} from "./styles";
import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { FiSearch } from "react-icons/fi";

export function Home(){
    const [search, setSearch] = useState("");
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    
    const { user } = useAuth();
    const navigate = useNavigate();


    function handleDetails(id){
        navigate(`/details/${id}`)
    }

    useEffect(() => {
         async function fetchNotes(){
            if(user) {
                const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
                setNotes(response.data);
            }
        }

        fetchNotes();

    }, [tagsSelected, search, user]);


    return(
        <Container>
            <Header/>
            <Content>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            </Search>

                <div class="head-home">
                      <h1>Meus filmes</h1>
                        <NewNote to="/new">
                            <FiPlus/>
                            Adicionar filme
                        </NewNote>
                </div>

                    { 
                        notes.map(note =>(
                        <Note 
                            key={String(note.id)}
                            data={note} 
                            onClick={() => handleDetails(note.id)}
                        />
                        ))
                    }
        
               
            </Content>


        </Container>
    )
}