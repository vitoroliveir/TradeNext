import styled from 'styled-components'

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.5rem 2rem;
    position: relative;
    box-sizing: border-box;

    > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        transform: translateX(1.25rem);

        > li > a {
            text-decoration: none;
            color: black;
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0em;
        }

        > li > a:hover {
            color: #119598;
        }
    }

    @media (max-width: 950px) {
        padding: 1.25rem 1rem;

        > ul {
            transform: translateX(0.75rem);
        }
    }

    @media (max-width: 650px) {
        justify-content: space-between;
        padding: 1rem;

        > ul > li {
            display: none;
        }

        > ul {
            width: auto;
            justify-content: flex-end;
            transform: translateX(0);
            gap: 0.5rem;
        }
    }
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > li > a {
        text-decoration: none;
        color: black;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
    }

    > li > a:hover {
        color: #119598;
    }

    Button {
        width: 150px;
        margin: 0;
    }

    Button:hover {
        background-color: #119598;
    }

    @media (max-width: 650px) {
        width: auto;
        justify-content: flex-end;
        gap: 0.75rem;

        Button {
            width: 140px;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    position: absolute;
    left: 5.5rem;

    > p {
        margin: 0;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
        white-space: nowrap;
    }

    @media (max-width: 950px) {
        left: 2.5rem;
    }

    @media (max-width: 760px) {
        position: static;
        left: auto;
        gap: 0.5rem;

        > p {
            display: block;
            font-size: 14px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;

    @media (max-width: 950px) {
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
    }
`;

export const HomeSection = styled.section`
    width: 100%;
    padding: 3rem 0rem 10rem;
`;

export const AboutSection = styled.section`
    width: 100%;
    padding: 10rem 2rem 10rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background: #f8fbfb;
`;

export const AboutContent = styled.div`
    width: min(100%, 980px);

    > h2 {
        margin: 0 0 1rem;
        font-family: 'Inter';
        font-size: clamp(1.8rem, 3vw, 2.25rem);
        font-weight: 700;
        color: #0b3b3c;
    }

    > p {
        margin: 0.75rem 0;
        font-family: 'Inter';
        font-size: clamp(1rem, 1.8vw, 1.1rem);
        line-height: 1.6;
        color: rgba(0, 0, 0, 0.72);
    }

    @media (max-width: 650px) {
        text-align: center;
        padding: 0 0.25rem;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    background: #0f4d4f;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const FooterContent = styled.div`
    width: min(100%, 980px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    > p {
        margin: 0;
        font-family: 'Inter';
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.95);
    }

    @media (max-width: 760px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    > a {
        font-family: 'Inter';
        color: white;
        text-decoration: none;
        font-size: 0.95rem;
        font-weight: 500;
    }

    > a:hover {
        color: #9ce7e8;
    }
`;

export const ImageInvestments = styled.div`
    width: min(45%, 620px);
    min-height: 360px;
    border-radius: 20px;
    background-color: #47ADAF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    animation-name: moveImage;
    animation-duration: 1s;

    @media (max-width: 950px) {
        width: min(100%, 620px);
        min-height: 280px;
    }

    @keyframes moveImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ContentStart = styled.div`
    width: min(40%, 520px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    animation-name: moveText;
    animation-duration: 1s;

    > h1 {
        margin: 0;
        font-family: 'Inter';
        font-size: clamp(2rem, 4vw, 2.5rem);
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0em;
        text-align: left;
    }

    > p {
        margin: 1rem 0 2rem;
        font-family: "Inter";
        font-size: clamp(1rem, 2vw, 1.25rem);
        font-weight: 500;
        line-height: 1.5;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(0, 0, 0, 0.44);
    }

    > a {
        text-decoration: none;
        width: 100%;
        max-width: 205px;
        animation-name: moveText;
        animation-duration: 2s;
    }

    > a > Button {
        width: 100%;
        max-width: 205px;
    }

    @media (max-width: 950px) {
        width: 100%;
        max-width: 620px;
        align-items: center;
        text-align: center;

        > h1,
        > p {
            text-align: center;
        }

        > a {
            max-width: 260px;
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }

        > a > Button {
            margin: 0 auto;
        }
    }

    @keyframes moveText {
        from {
            opacity: 0;
            transform: translateX(-6%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
