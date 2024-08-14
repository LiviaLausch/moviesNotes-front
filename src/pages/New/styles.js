import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 6.5rem auto;
    grid-template-areas: 
    "header"
    "content";


    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        gap: 1.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin: 1rem;;
    }
`;

export const Form = styled.form`
    max-width: 80%;
    margin-inline: auto;

    > header {
        display: block;     
        align-items: center;
        max-width: 80%;

        margin-bottom: 2.25rem;

        h1 {
            font-size: 2.25rem;
            max-width: 80%;
        }

        button {
            display: flex;
            font-size: 1rem;
            gap: 8px;
            align-items: center;
            margin-bottom: 24px;
            margin-top: 40px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            max-width: 100%;
            h1 {
                font-size: 1.8rem;
            }
        }
    }

    #title-rading {
        display: flex;
        gap: 2.5rem;
        margin-bottom: 1.25rem;
        
            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                width: 80%;
               display: flex;
               flex-direction: column;
               gap: 1rem;
            }

    }

    > #buttons-new {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2.5rem;
        margin-bottom: 6.25rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                width: 80%;
               display: flex;
               flex-direction: column;
               gap: 1rem;
            }

    }

    #delete{
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_BLACK};
        color: ${({ theme }) => theme.COLORS.PINK};

        width: 100%;
        height: 3.5rem;
        border: 0;
        padding: 0 16px;
        margin-top: 16px;
        border-radius: 10px;

        font-weight: 500;

        &:disabled {
            opacity: 0.5;
        }
        }

        > h1{
            font-size: 1.25rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            margin: 34px 0 24px;
            max-width: 80%;

        }

        > .tags {
            background-color: #0D0C0F;
            padding: 1rem;
            border-radius: 10px;
            display: flex;
            margin-bottom: 2.5rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
                display: block;
                padding: 0.8rem;
            }

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
               width: 80%;
               display: flex;
               flex-direction: column;
            }
        }
`;