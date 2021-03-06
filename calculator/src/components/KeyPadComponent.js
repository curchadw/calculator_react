import React  from 'react'

const KeyPadComponent = (props) =>{
    
   const handleClick = (e) =>{
         props.onClick(e.target.name)
    }
    
    return (
        <div className='button'>
            <button name='(' onClick={handleClick}>(</button>
            <button name='CE' onClick={handleClick}>CE</button>
            <button name=')' onClick={handleClick}>)</button>
            <button name='C' onClick={handleClick}>C</button><br/>

            <button name='1' onClick={handleClick}>1</button>
            <button name='2' onClick={handleClick}>2</button>
            <button name='3' onClick={handleClick}>3</button>
            <button name='+' onClick={handleClick}>+</button><br/>

            <button name='4' onClick={handleClick}>4</button>
            <button name='5' onClick={handleClick}>5</button>
            <button name='6' onClick={handleClick}>6</button>
            <button name='-' onClick={handleClick}>-</button><br/>

            <button name='7' onClick={handleClick}>7</button>
            <button name='8' onClick={handleClick}>8</button>
            <button name='9' onClick={handleClick}>9</button>
            <button name='*' onClick={handleClick}>*</button><br/>

            <button name='.' onClick={handleClick}>.</button>
            <button name='0' onClick={handleClick}>0</button>
            <button name='=' onClick={handleClick}>=</button>
            <button name='/' onClick={handleClick}>/</button><br/>

        </div>

    )
}


export default KeyPadComponent