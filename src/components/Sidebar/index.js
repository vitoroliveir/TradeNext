import { useState, useContext, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from 'next/image'
import { AuthContext } from "../../contexts/AuthContext";
import { Message } from '../Message';
import {
    Container,
    Sidebar,
    Top_section,
    Icon,
    Link_text,
    IconFaGlobeAmericas,
    IconBsChatDots,
    IconAiOutlineHome,
    IconCiWallet,
    Logo,
    IconBsArrowLeftShort,
    IconMdOutlineSpaceDashboard,
    IconHiOutlineLogout,
    IconMdMenu,
    Menu,
    Name,
    User,
    SingOut,
    Access

} from './style'
import Search from "../Search";


export default function SideBar({ Page }) {
    const [isOpen, setIsOpen] = useState(false);
    const { user, signOut } = useContext(AuthContext);
    const [message, setMessage] = useState(false)
    const [larguraDaTela, setLarguraDaTela] = useState(null);
    const [active, setActive] = useState(false);
    const [click, setClick] = useState(false);

    const onclick = () => {
        if (isOpen) {
            setIsOpen(false)
            setClick(false)
        } else {
            setIsOpen(true)
            setClick(true)
        }
    }

    const validarEntrada = () => {
        if (larguraDaTela <= 500 && click == true) {
            setIsOpen(true)
        } if (larguraDaTela >= 500 && isOpen == false) {
            setIsOpen(true)
        }
    }

    const validarSaida = () => {
        if (larguraDaTela <= 500 && click == false && isOpen == true) {
            setIsOpen(false)
        } if (larguraDaTela >= 499 && isOpen == true && click == false) {
            setIsOpen(false)
        }
    }


    const handleResize = () => {
        setLarguraDaTela(window.innerWidth);
    };

    const handleResizeMemo = useMemo(() => {
        return handleResize;
    }, []); // Esta função só será recriada quando o componente for montado ou desmontado

    useEffect(() => {
        handleResize(); // Obter o tamanho da janela inicialmente
        window.addEventListener('resize', handleResizeMemo);

        return () => {
            window.removeEventListener('resize', handleResizeMemo);
        };
    }, [handleResizeMemo]);


    const onMessage = () => {
        setMessage(true)

        setTimeout(function () {
            setMessage(false)
        }, 3000)
    }

    return (
        <Container onMouseLeave={validarSaida}  >

            <Sidebar active={isOpen} onMouseEnter={() => setIsOpen(false)}>
                <Menu>
                    <Search></Search>

                    <Name active={isOpen} >{Page}</Name>

                    <User><h1>Olá, {user?.name.slice(0, 16)}</h1></User>
                </Menu>
                <Top_section >
                    <Logo active={isOpen}>
                        <Image
                            src="/images/logo.svg"
                            alt="logo"
                            width="36"
                            height="36"
                        />
                        <p >Trade Next</p>
                    </Logo>
                    <IconMdMenu onClick={onclick} />
                </Top_section>
                {message ? <Message /> : null}
                <Access active={active} >

                    <Link_text onMouseEnter={validarEntrada} active={isOpen}>
                        <Icon><IconAiOutlineHome /></Icon>
                        <Link activeclassName="active" href="/home">
                            <title>Home</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validarEntrada} active={isOpen}>
                        <Icon ><IconMdOutlineSpaceDashboard /></Icon>
                        <Link activeclassName="active" href="/dashboard">
                            <title>Dashboard</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validarEntrada} active={isOpen}>
                        <Icon ><IconCiWallet /></Icon>
                        <Link activeclassName="active" href="/carteira">
                            <title>Carteira</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validarEntrada} active={isOpen}>
                        <Icon ><IconFaGlobeAmericas /></Icon>
                        <Link activeclassName="active" href="/news">
                            <title>Noticias</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validarEntrada} active={isOpen} onClick={onMessage}>
                        <Icon ><IconBsChatDots /></Icon>
                        <Link activeclassName="active" href="" >
                            <title>Chat</title>
                        </Link>
                    </Link_text>

                </Access>
                <SingOut onMouseEnter={validarEntrada} onClick={() => signOut()} active={isOpen}>
                    <IconHiOutlineLogout />
                    <p>Logout</p>
                </SingOut>
            </Sidebar>


        </Container>
    );

}