import React from 'react';

const Form = (props) => {
    
    //console.log(props)
    return (
    
        <>
            <form onSubmit={props.submit}>
                
                hour <input value={props.hr} onChange={props.hrChange}/>
                min <input value={props.mn} onChange={props.minChange}/>
                sec <input value={props.sc} onChange={props.secChange}/>
                <button type='submit'>start</button>
                
            </form>
        </>
    
    )
    
}

export default Form