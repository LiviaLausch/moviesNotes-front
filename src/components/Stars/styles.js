import styled from "styled-components";

export const Container = styled.button`
    width: 16px;
    height: 16px;
    display: flex;
    flex-direction: column;
    background: none;
    border: none;

    > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;