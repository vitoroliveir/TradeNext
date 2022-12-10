import React from 'react';
import Modal from '../Modal';

import { 
    Container ,
    Dados
} from './styles';

export default function B3({page}){
  return (
    <Container>
        <Modal page={page}>
            <Dados>
                <h1>EM BREVE </h1>
            </Dados>
        </Modal>
    </Container>
  );
}