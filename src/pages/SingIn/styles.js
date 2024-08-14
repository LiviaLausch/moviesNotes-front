import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    
`;

export const Form = styled.form`
    padding: 0 8.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    text-align: center;

    > h1 {
        font-size: 3rem;
        font-weight: 600;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 1.5rem;
        margin: 48px 0;

    }

    > p {
        font-size: 0.87rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        padding: 4rem;

        h1 {
            font-size: 2.5rem;
        }
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        background: none;
        display: none;
        align-items: center;
        justify-content: center;
    }
`;