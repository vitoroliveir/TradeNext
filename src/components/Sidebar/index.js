import { useState, useContext } from "react";
import Link from "next/link";
import Image from 'next/image'
import { AuthContext } from "../../contexts/AuthContext";

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
    const { user , signOut} = useContext(AuthContext);

    const [active, setActive] = useState(false);

    const handleClick = () =>{
      if(active == ""){
        setActive(true)
      }else{
        setActive(false)
      }
    }

    return (
        <Container onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}  >

            <Sidebar active={isOpen} onMouseEnter={() => setIsOpen(false)}>
                <Menu>
                    <Search></Search>

                    <Name active={isOpen} >{Page}</Name>

                    <User><h1>Olá, {user?.name}</h1></User>
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
                    <IconMdMenu onClick={() => isOpen ? setIsOpen(false) :setIsOpen(true)}/>
                </Top_section>

                <Access active={active} >

                    <Link_text onMouseEnter={() => setIsOpen(true)}   active={isOpen}>
                        <Icon><IconAiOutlineHome /></Icon>
                        <Link activeclassName="active" href="/home">
                            <title>Home</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={() => setIsOpen(true)}  active={isOpen}>
                        <Icon ><IconMdOutlineSpaceDashboard /></Icon>
                        <Link activeclassName="active" href="/dashboard">
                            <title>Dashboard</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={() => setIsOpen(true)}  active={isOpen}>
                        <Icon ><IconCiWallet /></Icon>
                        <Link activeclassName="active" href="/carteira">
                            <title>Carteira</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={() => setIsOpen(true)}  active={isOpen}>
                        <Icon ><IconFaGlobeAmericas /></Icon>
                        <Link activeclassName="active" href="/news">
                            <title>Noticias</title>
                        </Link>
                    </Link_text>



                    <Link_text onMouseEnter={() => setIsOpen(true)}  active={isOpen}>
                        <Icon ><IconBsChatDots /></Icon>
                        <Link activeclassName="active" href="">
                            <title>Chat</title>
                        </Link>
                    </Link_text>

                </Access>
                <SingOut onMouseEnter={() => setIsOpen(true)}  onClick={()=> signOut()} active={isOpen}>
                    <IconHiOutlineLogout />
                    <p>Logout</p>
                </SingOut>
            </Sidebar>


        </Container>
    );

}