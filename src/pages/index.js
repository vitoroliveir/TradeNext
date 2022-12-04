import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import {
  Menu,
  Content,
  ImageInvestments,
  ContentStart,
  Logo,
  Links
} from "../styles/index"
import Button from "../components/Button";

import { user} from "../hook/useAuth"

export default function Home() {


  return (
    <div >
      <Head>
        <title>TradeNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu>
        <Logo>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width="32"
            height="32" />

          <p>Trade Next</p>
        </Logo>
        <ul>
          <li>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li>
            <Link href="/"><a>Sobre</a></Link>
          </li>
          <Links>
            <li>
              <Link href="/signUp"><a><Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Criar Conta</Button></a></Link>
            </li>
            <li>
              <Link href="/login"><a>Entrar</a></Link>
            </li>
          </Links>
        </ul>

      </Menu>

      <Content>
        <ImageInvestments>
          <Image
            src="/images/investment.svg"
            alt="investment"
            width="750"
            height="555" />
        </ImageInvestments>
        <ContentStart>
          <h1>Calcule automaticamente a rentabilidade da sua carteira de investimentos</h1>
          <p>Não perca mais tempo com tabelas e planilhas complexas para acompanhar seus investimentos</p>

          <Link href="/signUp"><a><Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Crie sua conta</Button></a></Link>
        </ContentStart>

      </Content>

    </div>
  )
}
