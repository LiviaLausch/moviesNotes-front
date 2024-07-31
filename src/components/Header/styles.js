import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    height: 105px;
    padding: 20px;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const  Brand = styled.div`

    > h1{
        font-size: 34px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`; 

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-inline-end: 100px;
    margin-inline-start: 100px;
    gap: 100px;
    
     #prof {
        display: flex;
        align-items: center;
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