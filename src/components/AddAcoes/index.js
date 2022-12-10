import React, { useState } from 'react';
import Modal from '../Modal';
import Err from '../Err'

import Input from '../Input'
import {
    Container,
    Dados,
    WrapInput,
    Title,
    Errs
} from './styles';
import Button from '../Button';


export default function AddAcoes({results, page}) {
    const [ativo , setAtivo] = useState();
    const [corretora , setCorretora] = useState();
    const [value , setValue] = useState();
    const [qtd , setQtd] = useState();
    const [date , setDate] = useState();
    const [error , setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [messageError ,setMessageError] = useState("")

    var data = {
        name : ativo,
        value: value,
        corretora: corretora ,
        date: date,
        qtd: qtd
    }

    const onErro = (response, success) =>{
        setError(true)
        setMessageError(response)

        if(success == true){
            setSuccess(true)
        }else{
            setSuccess(false)
        }

        setTimeout(function () {
            setError(false)
        }, 4500)
    } 

    
    
    return (
        <Container>
            {error ? <Errs><Err backgroundColor={success ? "green": null} width={"240px"}>{messageError}</Err></Errs>: null}

            <Modal data={data} onError={(response, success) => onErro(response, success)} results={results} page={page}>
                <Title>CADASTRO AÇÕES</Title>
                
                <Dados>
                    <WrapInput>
                        <Input
                            type={"string"}
                            name={"acoes"}
                            label={"Ativo"}
                            placeholder={'Ativo'}
                            onChange={(e) => setAtivo(e.target.value)}
                            /* oninput={} */
                        />
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"string"}
                            name={"corretora"}
                            label={"Corretora"}
                            placeholder={'Corretora'}
                            onChange={(e) => setCorretora(e.target.value)}
                        />
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"number"}
                            name={"preco"}
                            label={"Preço Custo(R$)"}
                            placeholder={'0,00'}
                            step={"0.001"}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"number"}
                            name={"quantidade"}
                            label={"Quantidade"}
                            placeholder={'0'}
                            onChange={(e) => setQtd(e.target.value)}
                        />
                    </WrapInput>

                    <WrapInput date={true}>
                        <Input
                            type={"date"}
                            name={"date"}
                            label={"Data"}
                            placeholder={''}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </WrapInput>

                    <Button type="submit" backgroundColor={"var(--green-50)"} >Salvar</Button>
                </Dados>
            </Modal>
        </Container>
    );
}