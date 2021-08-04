import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    background: #222;
    height: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${props => props.theme.colors.white};
    padding: 0 3rem;

    & > h3 {
        font-weight: 300;
        margin-bottom: 2rem;
    }

    & > p {
        font-weight: 600;
        font-size: 1.8rem;
        text-transform: uppercase;

        a {
            color: #EC9649;
            
            :hover {
                border-bottom: 2px solid #EC9649;
            }
        }
    }
`;
