import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.textarea`
    width: 100%;
    height: 16rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;
    resize: none;

    padding: 1rem;
    margin-bottom: 8px;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: 80%;
        height: 11rem;
    }

`;