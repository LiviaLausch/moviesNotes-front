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
    margin: 50px;

    .head-home {
        display: flex;
        place-content: center;
        justify-content: space-between;
        margin-bottom: 38px;
        margin-inline-end: 100px;
        margin-inline-start: 100px;
        gap: 100px;

       > h1 {
            font-size: 28px;
            font-weight: 500;
       }
    }

`; 

export const  Search = styled.div`
    padding: 10px;
    margin: 40px 0;
    width: 100%;
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