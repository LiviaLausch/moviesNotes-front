import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 4rem 0 ;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 2.5rem 12.5rem auto;

    display: flex;
    flex-direction: column;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin: 1rem 3rem auto;
    }


    > button:first-child {
        align-self: end;
    }

    > .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        margin: 24px auto;

        > h1 {
            display: flex;
            font-size: 2.25rem;
            font-weight: 400;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
            display: block;

            h1 {
              font-size: 1.8rem;
              margin-bottom: 0.5rem;
            }
        }   

    }


    > .command {
        display: flex;
        justify-content: space-between;

        a {
            color: ${({ theme }) => theme.COLORS.PINK};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

        }
    }

    > .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        margin-bottom: 40px;
        font-family: 'Roboto', sans-serif;

        > #perfil {
            display: flex;
            flex-direction: column;

            img{
                height: 16px;
                width: 16px;
                border-radius: 50%;
            }
        }
        > p {
            display: flex;
        }

        > span {
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${({ theme }) => theme.COLORS.PINK};

            p {
                color: ${({ theme }) => theme.COLORS.WHITE};
            
            }
        }
    }

    > .tags {
        margin-bottom: 2.5rem;
    }

    > p {
        font-size: 1rem;
        margin-top: 16px;
        text-align: justify;
}


`;