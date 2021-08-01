import styled from 'styled-components';

export const HomeBlockTwoWrapper = styled.section`
  max-width: 120rem;
  margin: 10rem auto 0 auto;
  padding:  0 3rem;
  
  & > .intro-wrapper {
      display: grid;
      gap: 5rem;
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  & > div > div {
      & > strong {
          font-size: 2.4rem;
      }
      
      & > p {
          margin-top: 2rem;
          font-size: 1.8rem;
      }
  }

  & > .intro-wrapper-2 .img-wrapper {
      position: relative;
      width: 100%;
      height: 40rem;
      margin: 4rem 0;

      & > div {
        img {
            object-fit: cover;
        }
      }
  }

  & > .intro-wrapper-3 {
      margin-top: 5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      max-width: 100rem;
      margin: 5rem auto 0 auto;

        & > h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;

        }
        
        & > p {
            font-size: 2rem;
            font-weight: 400;
        }

        @media (max-width: 600px) {
            & > h1 {
                font-size: 2.5rem;
            }

            & > p {
                font-size: 1.8rem;
            }
        }
        
      :before {
          display: block;
          content: "";
          width: 100%;
          height: 0.3rem;
          background: #ddd;
          margin-bottom: 3rem;
      }
  }
`;