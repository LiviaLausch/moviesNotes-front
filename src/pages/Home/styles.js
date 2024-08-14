import styled from "styled-components";
import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const  Container = styled.div`
    width: 100%;
    height: 100vh;


    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};
`;


export const  Content = styled.div`
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3.12rem;

    .head-home {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2.38rem;
        gap: 6.25rem;

       > h1 {
            font-size: 1.75rem;
            font-weight: 500;
            display: flex;
            align-items: center;
       }

       @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        gap: 4rem;
            h1 {
                font-size: 1.2rem;
            }
       }
    }

`; 

export const  Search = styled.div`
    padding: 0.62rem;
    margin-bottom: 2.5rem;
    width: 100%;
`;  

export const  NewNote = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    display: flex;
    border-radius: 0.5rem;
    padding: 0.88rem 2.5rem;
    align-items: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0.8rem 1.5rem;
    }
    
    svg {
        height: 1rem;
        width: 1rem;
        margin-right: 8px;
    }
`; 