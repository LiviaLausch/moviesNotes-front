import styled from "styled-components";

export const Container = styled.button`
    width: 100px;
    height: 20px;
    display: flex;
    flex-direction: column;
    background: none;
    border: none;

    > div {
        display: flex;
        margin: 8px 0 15px;
        gap: 2px;
    }
`;