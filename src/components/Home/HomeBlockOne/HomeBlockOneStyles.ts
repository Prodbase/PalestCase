import styled from 'styled-components';

export const HomeBlockOneWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #222;
    height: 50rem;
    position: relative;

    & > div img {
        object-fit: cover;
        filter: brightness(0.7);
    }

    div.texts-wrapper {
        position: absolute;
        color: ${props => props.theme.colors.white};
        text-align: center;
        padding: 0 3rem;

        & > h1 {
            text-transform: uppercase;
            font-size: 4rem;
        }

        & > p {
            font-size: 2rem;
            font-style: italic;
        }
    }
`;