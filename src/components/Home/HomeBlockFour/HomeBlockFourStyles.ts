import styled from 'styled-components';

export const HomeBlockFourWrapper = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   margin: 10rem auto;
   padding: 0 3rem;

   hr {
      height: 0.4rem;
      background: #ddd;
      width: 100%;
      border: none;
      margin-bottom: 3rem;
    }

   & > .about {
       min-width: 100%;

       & > .texts-about {
           text-align: left;
           max-width: 120rem;
           margin: 5rem auto;

           & > h1 {
               font-weight: 500;
               font-size: 3rem;
               margin-bottom: 2rem;
            }
            
            @media (max-width: 600px) {
                & > h1 {
                    font-size: 2.5rem;
               }
           }
       }
   }

   & > .about .banner {
       position: relative;
       height: 50rem;
       min-width: 100%;

       div img {
           object-fit: cover;
           filter: brightness(0.7)
       }

       .texts {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           color: ${props => props.theme.colors.white};

            > h1 {
                text-transform: capitalize;
                font-size: 4rem;
            }

            & > p {
                font-size: 2rem;
                font-style: italic;
            }
       }
   }

   & > .newsletter {
        & > h1 {
            font-size: 4rem;
            font-weight: 500;
        }

        @media (max-width: 600px) {
                & > h1 {
                    font-size: 3rem;
               }
           }

        & > p {
            font-size: 1.8rem;
            max-width: 50rem;
        }

        & > div {
            margin-top: 2rem;

            input {
                height: 5rem;
                padding: 0 1rem;
            }

            button {
                height: 5rem;
                padding: 0 5rem;
                background: #222;
                border: none;
                outline: none;
                margin-left: 1rem;
                color: ${props => props.theme.colors.white};
            }

            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                

                button {
                    margin-left: 0;
                }
            }
        }
   }
`;
