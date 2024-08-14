import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: none;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.62rem;
    padding: 1rem;

    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;