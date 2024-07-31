import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";


    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        gap: 24px;
    }
`;

export const Form = styled.form`
    max-width: 1100px;
    margin-inline: auto;

    > header {
        display: block;
        align-items: center;

        margin-bottom: 36px;

        h1 {
            font-size: 36px;
        }

        button {
            display: flex;
            font-size: 16px;
            gap: 8px;
            align-items: center;
            margin-bottom: 24px;
            margin-top: 40px;
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }

    #title-rading {
        display: flex;
        gap: 40px;
        margin-bottom: 20px;
    }


    > #buttons-new {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 100px;

    }

    #delete{
        background-color: #0D0C0F ;
        color: ${({ theme }) => theme.COLORS.ORANGE};

        width: 100%;
        height: 56px;
        border: 0;
        padding: 0 16px;
        margin-top: 16px;
        border-radius: 10px;

        font-weight: 500;

        &:disabled {
            opacity: 0.5;
        }
        }

        > h1{
            font-size: 20px;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            margin: 34px auto 24px;

        }

        > .tags {
            background-color: #0D0C0F;
            padding: 16px;
            border-radius: 10px;
            display: flex;
            margin-bottom: 40px;
        }
`;