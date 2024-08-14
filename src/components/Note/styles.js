import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_PINK};
    

    border: none;
    border-radius: 10px;

    padding: 1.37rem;
    margin-bottom: 1.5rem;

    > .title {
        display: flex;
        align-items: center;
        gap: 1.25rem;

         h1 {
            font-weight: 700;
            font-size: 1.5rem;
            color: ${({ theme}) => theme.COLORS.WHITE};
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
                display: block;
                margin-bottom: .5rem;

                h1{ 
                    text-align: start;
                    margin-bottom: 0.2rem;
                }

        }
    }

    > p {
        display: flex;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin: 0.9rem auto;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        p{
            font-size: 0.8rem;
            margin-top: 1.5rem;
        }
    }

    > footer {
        width: 100%;
        display: flex;

        margin-top: 1.5rem;
    }
`;