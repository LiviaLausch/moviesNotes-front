import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 64px 0 ;
    }
`;

export const Content = styled.div`
    max-width: 100%;
    margin: 40px 200px auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > .head {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 20px;
        margin: 24px auto;

        > h1 {
            display: flex;
            font-size: 36px;
            font-weight: 400;
        }

    }

    > .command {
        display: flex;
        justify-content: space-between;

        a {
            color: ${({ theme }) => theme.COLORS.ORANGE};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;

        }
    }

    > .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        margin-bottom: 40px;
        font-family: 'Roboto', sans-serif;

        > #perfil {
            display: flex;
            flex-direction: column;

            img{
                height: 16px;
                width: 16px;
                border-radius: 50%;
            }
        }
        > p {
            display: flex;
        }

        > span {
            display: flex;
            align-items: center;
            gap: 6px;
            color: ${({ theme }) => theme.COLORS.ORANGE};

            p {
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
    }

    > .tags {
        margin-bottom: 40px;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
}

> content::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

> content::-webkit-scrollbar-track {
  background: orange;        /* color of the tracking area */
}

> content::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid orange;  /* creates padding around scroll thumb */
}

`;