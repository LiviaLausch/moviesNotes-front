import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    width: 100%;
    height: 6.56rem;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 35rem;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};


    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 0.8rem;
        gap: 8rem;
    }
     
    @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
        gap: 84rem;
    }
`;

export const  Brand = styled.div`
    display: flex;

    > h1{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.12rem;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    @media (max-width:  ${DEVICE_BREAKPOINTS.SM}) {
        h1 {
            font-size: 1.5rem;
        }
    }
`; 

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 6.25rem;
    
     #prof {
        display: flex;
        align-items: center;
        gap: 0.62rem;

        
        > div {
            
            display: flex;
            flex-direction: column;
            text-align: end;
            
            span {
                font-size: 0.8rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                
            }
            
            strong {
                font-size: 0.87rem;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
            
        }
        > a{
            img {
                display: flex;
                width: 3.5rem;
                height: 3.5rem;
                
                border-radius: 50%;
            }
            
        }
    }

    `;