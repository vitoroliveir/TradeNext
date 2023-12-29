import { useState, useContext, useEffect } from "react";
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
    

    const onclick = () =>{
        if(isOpen){
            setIsOpen(false) 
            setClick(false)
        }else{
            setIsOpen(true)
            setClick(true)
        }
    }

    const validar = ()=>{
        console.log(click);
        onclick()
        if(larguraDaTela >= 501 && click == false){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setLarguraDaTela(window.innerWidth);
          };
      
          const updateWidth = () => {
            setLarguraDaTela(window.innerWidth);
          };
      
          // Verifica se o código está sendo executado no ambiente do navegador antes de adicionar o event listener
          if (typeof window !== 'undefined') {
            setLarguraDaTela(window.innerWidth);
            window.addEventListener('resize', handleResize);
      
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          } else {
            // Simula a atualização da largura em um ambiente onde window não está disponível (SSR)
            updateWidth();
          }
      }, []);

    const onMessage = () => {
        setMessage(true)

        setTimeout(function () {
            setMessage(false)
        }, 3000)
    }

    return (
        <Container onMouseEnter={validar} onMouseLeave={() => setIsOpen(false)}  >

            <Sidebar active={isOpen} onMouseEnter={() =>  setIsOpen(false) }>
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
                    <IconMdMenu onClick={ onclick}  />
                </Top_section>
                {message ? <Message /> : null}
                <Access active={active} >

                    <Link_text onMouseEnter={validar} active={isOpen}>
                        <Icon><IconAiOutlineHome /></Icon>
                        <Link activeclassName="active" href="/home">
                            <title>Home</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validar} active={isOpen}>
                        <Icon ><IconMdOutlineSpaceDashboard /></Icon>
                        <Link activeclassName="active" href="/dashboard">
                            <title>Dashboard</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validar} active={isOpen}>
                        <Icon ><IconCiWallet /></Icon>
                        <Link activeclassName="active" href="/carteira">
                            <title>Carteira</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validar} active={isOpen}>
                        <Icon ><IconFaGlobeAmericas /></Icon>
                        <Link activeclassName="active" href="/news">
                            <title>Noticias</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={validar} active={isOpen} onClick={onMessage}>
                        <Icon ><IconBsChatDots /></Icon>
                        <Link activeclassName="active" href="" >
                            <title>Chat</title>
                        </Link>
                    </Link_text>

                </Access>
                <SingOut onMouseEnter={validar} onClick={() => signOut()} active={isOpen}>
                    <IconHiOutlineLogout />
                    <p>Logout</p>
                </SingOut>
            </Sidebar>


        </Container>
    );

}