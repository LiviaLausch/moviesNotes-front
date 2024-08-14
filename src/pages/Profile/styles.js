import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 9rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 7rem;

        button {
            color: ${({ theme }) => theme.COLORS.PINK};
            background: none;
            border: none;
            gap: 8px;
            display: flex;
            align-items: center;
            margin-left: 0;
            padding: 1rem;
            position: absolute;
            top:1rem;
            left: 1rem;
        
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            top: 1rem;
            left: 0.5rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 21rem;
    margin: 1.87rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > div:nth-child(4){
        margin-top: 1.5rem;
    }

`;

export const Avatar = styled.div`
    position: relative;
    margin: -11rem auto 2rem;

    width: 11rem;
    height: 11rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 9rem;
        height: 9rem;

        margin-bottom: 1rem;
        margin: -8rem auto 2rem;
    }

    > img {
        border-radius: 50%;

        width: 11rem;
        height: 11rem;
    }

    > label {
        width: 3rem;
        height: 3rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0.43rem;
        right: 0.43rem;

        

        cursor: pointer;

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            bottom: -2rem;
            right: -1rem;
    }

        input {
            display: none;
        }

        svg {
            width: 1.25rem;
            height: 1.25rem;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        }
    }
`;