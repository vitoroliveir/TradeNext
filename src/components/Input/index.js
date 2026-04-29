import React, { useState } from "react";
import { 
    Container,
    InputField,
    Eyes,
    Eyes2,
    WrapInput,
    Error,
} from './style'


const Input = ({ type, name, label, placeholder, onChange, register = () => ({}), error, onInput, step, value }) => {
    const [show, setShow] = useState(false);
  
    function handleClick(e) {
      e.preventDefault();
        setShow(!show)
    }
    
    return (
        <Container>
            <label>{label}</label>
                <WrapInput >
                    <InputField
                        type={type === "password" ? (show ? "text" : "password") : type } 
                        name={name} 
                        placeholder={placeholder} 
                        onChange={onChange} 
                        {...register(name)} 
                        onInput={onInput}
                        step={step}
                        value={value}
                    />

                    {error ? <Error>{error}</Error> : null}
                    { 
                        type === 'password' ? (show ? 
                            (<Eyes onClick={handleClick}/> ): 
                            (<Eyes2 onClick={handleClick}/>)
                            ): (
                                null
                            )
                    }
                </WrapInput>
        </Container>
    )
}

export default Input;