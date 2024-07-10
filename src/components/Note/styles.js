import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: rgba(255, 133, 155, 0.08);
    

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 24px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme}) => theme.COLORS.WHITE};
    }

    > p {
        display: flex;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin: 15px auto;
    }

    > footer {
        width: 100%;
        display: flex;

        margin-top: 24px;
    }
`;