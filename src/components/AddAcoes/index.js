import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import Err from '../Err'

import Input from '../Input'
import {
    Container,
    Dados,
    WrapInput,
    Title,
    Errs,
    WrapEdit
} from './styles';
import Button from '../Button';


export default function AddAcoes({results, page , type, ativos}) {
    const [ativo , setAtivo] = useState(ativos != undefined ?  ativos.name: "");
    const [corretora , setCorretora] = useState(ativos != undefined ?  ativos.corretora: "");
    const [value , setValue] = useState(ativos != undefined ?  ativos.value: "");
    const [qtd , setQtd] = useState(ativos != undefined ?  ativos.qtd: "");
    const [date , setDate] = useState(ativos != undefined ?  ativos.date : "");
    const [error , setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [messageError ,setMessageError] = useState("")
    const [operation , setOperation] = useState()

    var data = {
        name : ativo,
        value: value,
        corretora: corretora ,
        date: date,
        qtd: qtd
    }

    if(type == "EDITAR"){
        var newData = {
            name : ativo == undefined ? ativos.name : ativo,
            value: value == undefined ? ativos.value : value,
            corretora: corretora == undefined ? ativos.corretora : corretora,
            date: date == undefined ? ativos.date : date,
            qtd: qtd == undefined ? ativos.qtd  : qtd 
        }
    
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
            {error && type != "EDITAR"? <Errs><Err backgroundColor={success ? "green": null} width={"240px"}>{messageError}</Err></Errs>: null}

            <Modal data={type == "EDITAR" ? newData : data} onError={(response, success) => onErro(response, success)} results={results} page={page} type={type} operation={operation}>
                <Title>{`${type} AÇÕES`}</Title>
               
                <Dados>
                    <WrapInput>
                        <Input
                            type={"string"}
                            name={"acoes"}
                            label={"Ativo"}
                            placeholder={'Ativo'}
                            onChange={(e) => setAtivo(e.target.value)}
                            value={ativo}
                        >
                        </Input>
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"string"}
                            name={"corretora"}
                            label={"Corretora"}
                            placeholder={'Corretora'}
                            onChange={(e) => setCorretora(e.target.value)}
                            value={corretora}
                            >
                            
                            </Input>
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"number"}
                            name={"preco"}
                            label={"Preço Custo(R$)"}
                            placeholder={'0,00'}
                            step={"0.001"}
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                            >
                            </Input>
                    </WrapInput>

                    <WrapInput>
                        <Input
                            type={"number"}
                            name={"quantidade"}
                            label={"Quantidade"}
                            placeholder={'0'}
                            onChange={(e) => setQtd(e.target.value)}
                            value={qtd}
                            >
                            </Input>
                    </WrapInput>

                    <WrapInput date={true}>
                        <Input
                            type={"date"}
                            name={"date"} 
                            label={"Data"}
                            placeholder={''}
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            >

                            </Input>
                    </WrapInput>
                    {
                        type == "EDITAR" ? <WrapEdit>
                        <Button  backgroundColor={"var(--grenn-150)"} color={"white"} >Salvar</Button>
                        <Button  onClick={ () => setOperation("delete")} backgroundColor={"var(--red-50)"} color={"white"}>Excluir</Button>
                        </WrapEdit>

                        :
                        <Button type="submit" backgroundColor={"var(--green-50)"} >Salvar</Button>
                    }
                </Dados>
            </Modal>
        </Container>
    );
}