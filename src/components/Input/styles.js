import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 10px;

    > input {
        height: 3.5rem;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
    
    svg {
            margin-left: 16px;
        }


    
`;