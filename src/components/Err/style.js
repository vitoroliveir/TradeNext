import styled from 'styled-components';


export const Err = styled.div`
    width: ${props => props.width ? props.width : "352px"};
    border-radius: 8px;
    height: 50px;
    background-color:${props => props.backgroundColor ? props.backgroundColor : "#F64B3C"};
    display: ${props => props.display? props.display : "flex"};
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;

    position: relative;
    top: 15px;
    transition:2s;

    >p {
        color: white;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
    }
    
`;