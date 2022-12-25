import Image from 'next/image'
import {
    Container
} from "./styles"

function Loading() {
    return (
        <Container>
            <Image 
                src="/images/Loading.svg"
                alt=""
                width="50"
                height="50" />
        </Container>
    );
}

export default Loading;