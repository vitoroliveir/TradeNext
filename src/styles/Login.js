import styled from 'styled-components'

export const Body = styled.div`
    @media (max-width: 867px) {
        width: 300px;  
    }

`;

export const SideImage =  styled.div`
    @media (max-width: 867px) {
        display: none;        
    }

    width: 46%;
    height: 814px;
    background-color: var(--green-50);
    position: absolute;
    top: 65px;
    left: 45px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    > Image{
        display: flex;
        align-items: center;
    }
`;


export const Logo =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -80px;

    @media (min-width: 867px) {
        position: relative;
        top: -50px;
        
        width: 130px;
        height: 30px;
        display: flex;
        flex-direction: row;
        

        >p{
            position: absolute;
            height: 19px;
            width: 86px;
            left: 44px;
            top: 6.5px;
        }
    }

    @media (max-width: 500px) {
        position: relative;
        left: 33%;
        top: -35px;
    }

    > p{            
        height: 19px;
        width: 86px;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }
`;

export const FormLogin =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 150px;
    

    
    > h1{
        font-family: 'Inter';
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    > p{
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }

    @media (min-width: 867px) {
        position: absolute;
        left: 56%;
        top: 140px;

        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    @media (max-width: 500px) {
        position: absolute;
        left: 15%;
        top: 100px;
        width: 330px;
        

        display: flex;
        justify-content: center;
        align-items: flex-start;
        
        
        > h1{
            font-family: 'Inter';
            font-size: 32px;
            font-weight: 700;
            line-height: 39px;
            letter-spacing: 0.01em;
            text-align: left;
        }

        
        > p{
            font-family: 'Inter';
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;

        }
    }


`;


