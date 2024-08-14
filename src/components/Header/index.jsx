
import { Container, Profile, Brand} from "./styles";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import  avatarPlaceHolder  from "../../assets/avatar_placeholder.jpg";

export function Header(){
    const { singOut, user } = useAuth();
    const navigation = useNavigate();

    function handleSingOut(){
        navigation("/");
        singOut();
    }

    const  avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

    return(
        <Container>
            <Brand>
                <h1>MoviesNotes</h1>
            </Brand>

            
            <Profile to="/profile">
                <div id="prof">
                    <div>
                        <Link to="/profile"> 
                            <strong> { user.name } </strong>
                        </Link>
                    
                        <Link onClick={handleSingOut}>
                            <span>sair</span>
                        </Link>
                    </div>
                        <Link to="/profile">
                            <img 
                                src={avatarUrl} 
                                alt={user.name}
                            />
                        </Link>
                </div>

            </Profile>

        </Container>
    )
}
