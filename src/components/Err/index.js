import {
    Err
} from "./style"

export default function Error(props) {
    return (
        <>
            {
                <Err backgroundColor={props.backgroundColor} width={props.width}><p>{props.children}</p></Err>
            }
        </>
    )
}

