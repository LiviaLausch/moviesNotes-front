import { Container, Profile, Brand, Search } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
            <Brand>
                <h1>MoviesNotes</h1>
            </Brand>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            
                <div id="prof">
                    <div>
                        <Link to="/profile"> <strong>Livia Lausch</strong></Link>
                    
                        <Link to="/"><span>sair</span></Link>
                    </div>
                        <Link to="/profile">
                            <img 
                                src="https://github.com/livialausch.png" 
                                alt="foto de perfil" 
                            />
                        </Link>
                </div>

            </Profile>

        </Container>
    )
}