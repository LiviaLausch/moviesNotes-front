import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    background: none;
    border: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 0.5rem;
        height: 0.5rem;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 0.62rem;
    }
`;