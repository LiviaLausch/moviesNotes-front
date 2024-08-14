import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.span`
     font-size: 0.75rem;
     padding: 0.31rem 0.87rem;

     border-radius: 5px;
     margin-right: 6px;

     color: ${({ theme}) => theme.COLORS.WHITE};
     background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};

     @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
          padding: 0.2rem 0.4rem;

     }
`;