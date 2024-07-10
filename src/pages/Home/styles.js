import styled from "styled-components";
import { Link } from "react-router-dom";

export const  Container = styled.div`
    width: 100%;
    height: 100vh;


    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};
`;


export const  Content = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin: 50px 125px auto;

    .head-home {
        width: 100% ;
        display: flex;
        place-content: center;
        justify-content: space-between;
        margin-bottom: 38px;

       > h1 {
            font-size: 32px;
            font-weight: 500;
       }
    }

`; 
export const  NewNote = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    display: flex;
    border-radius: 8px;
    padding: 14px 40px;
    align-items: center;
    
    svg {
        height: 16px;
        width: 16px;
        margin-right: 8px;
    }
`; 