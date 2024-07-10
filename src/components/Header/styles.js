import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    height: 105px;
    width: 100%;
    margin-top: 10px;

    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    gap: 64px;
    
    padding: 0 8px;

`;

export const  Brand = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;


    > h1{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`; 

export const  Search = styled.div`
    padding: 10px;

     input {
        min-width: 600px;
    }
`;  

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 60px;
    
    
     #prof {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: -50px;
        gap: 10px;

        > div {

            display: flex;
            flex-direction: column;
            text-align: end;

            span {
                font: 14px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                
            }
            
            strong {
                font: 14px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

        }
        > a{
             img {
                display: flex;
                width: 56px;
                height: 56px;
        
                border-radius: 50%;
            }

        }
    }

`;