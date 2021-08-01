import styled from 'styled-components';

export const HomeBlockThreeWrapper = styled.section`
  height: 100%;
  display: flex;
  gap: 10rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  margin: 10rem auto;

  @media (max-width: 600px) {
      padding: 0 3rem;
  }

  hr {
      height: 0.4rem;
      background: #ddd;
      width: 100%;
      border: none;
  }

  & > .sec-one {
      display: grid;
      gap: 9rem;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

      & > div.texts {
        h1 {
            font-size: 4rem;
            margin-bottom: 2rem;
        }
        
        p {
            font-size: 1.8rem;
            color: #444;
        }
        
        
        button {
            background: #222;
            margin-top: 2rem;
            color: ${props => props.theme.colors.white};
            outline: none;
            border: none;
            padding: 1.5rem 2rem;
            font-size: 1.8rem;
        }

        @media (max-width: 600px) {
            & > h1 {
                font-size: 2.5rem;
            }

            & > p {
                font-size: 1.6rem;
            }
        }
      }
  }
  
  & > .sec-one .image-wrapper{
      position: relative;
      width: 100%;
      height: 60rem;

      div {
          border-radius: 1rem;

          img {
              object-fit: cover;
          }
      }
  }
`;
