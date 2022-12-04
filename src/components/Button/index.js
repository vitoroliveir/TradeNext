import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 44px;
    width: 370px;
    border: 1px solid rgba(208, 213, 221, 1);
    border-radius: 8px;
    padding: 12px, 154px, 12px, 154px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    background-color: ${ ({backgroundColor}) => backgroundColor ? `${backgroundColor}` : 'white'} ;
    color: ${ ({color}) =>`${color}`};

    @media (max-width: 500px) {
        height: 44px;
        width: 310px;
    }
    
`
export default Button;

