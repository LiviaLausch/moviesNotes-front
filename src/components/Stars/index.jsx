import { Container } from "./styles";
import star from "../../assets/star.svg";
import emptyStar from "../../assets/emptyStar.svg"; // Adicione uma estrela cinza para as não selecionadas

export function Stars({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <img 
            key={index} 
            src={index < rating ? star : emptyStar} 
            alt="estrela" 
        />
    ));

    return (
        <Container>
            <div>
                {stars}
            </div>
        </Container> 
    );
}
