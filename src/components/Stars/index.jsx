import { Container } from "./styles";
import Star from "../../assets/Star.svg";
import EmptyStar from "../../assets/emptyStar.svg";

export function Stars(){
    return(
        <Container>
            <div>
                <img id="star" src={Star} alt="estrela" />
                <img id="star" src={Star} alt="estrela" />
                <img id="star" src={Star} alt="estrela" />
                <img id="star" src={Star} alt="estrela" />
                <img id="star" src={EmptyStar} alt="estrela" />
            </div>
        </Container>
    )
}