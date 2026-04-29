import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import {
  Menu,
  Content,
  ImageInvestments,
  ContentStart,
  Logo,
  Links,
  HomeSection,
  AboutSection,
  AboutContent,
  Footer,
  FooterContent,
  FooterLinks
} from "../styles/index"
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
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
            height="32"
          />
          <p>Trade Next</p>
        </Logo>

        <ul>
          <li>
            <Link href="#home"><a>Home</a></Link>
          </li>
          <li>
            <Link href="#sobre"><a>Sobre</a></Link>
          </li>
          <Links>
            <li>
              <Link href="/signUp">
                <a>
                  <Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Criar Conta</Button>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login"><a>Entrar</a></Link>
            </li>
          </Links>
        </ul>
      </Menu>

      <HomeSection id="home">
        <Content>
          <ImageInvestments>
            <Image
              src="/images/investment.svg"
              alt="investment"
              width="750"
              height="555"
            />
          </ImageInvestments>

          <ContentStart>
            <h1>Calcule automaticamente a rentabilidade da sua carteira de investimentos</h1>
            <p>Não perca mais tempo com tabelas e planilhas complexas para acompanhar seus investimentos</p>
            <Link href="/signUp">
              <a>
                <Button backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Crie sua conta</Button>
              </a>
            </Link>
          </ContentStart>
        </Content>
      </HomeSection>

      <AboutSection id="sobre">
        <AboutContent>
          <h2>Sobre o TradeNext</h2>
          <p>
            O TradeNext foi criado para facilitar o acompanhamento da sua carteira com uma visao clara do seu patrimonio, custo total e retorno dos investimentos.
          </p>
          <p>
            Em um unico lugar, voce organiza seus ativos, acompanha noticias do mercado e toma decisoes com mais seguranca, sem depender de planilhas complicadas.
          </p>
          <p>
            Comece agora e tenha um controle mais simples, rapido e inteligente da sua jornada no mercado financeiro.
          </p>
        </AboutContent>
      </AboutSection>

      <Footer>
        <FooterContent>
          <p>TradeNext © 2024. Todos os direitos reservados.</p>
        </FooterContent>
      </Footer>
    </div>
  )
}
