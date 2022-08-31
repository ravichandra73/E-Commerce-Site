import React from 'react'
import  "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

const Subtotal = (props) => {
  return (
    <div className='subtotal-continer'>
            <CurrencyFormat renderText={(value)=>(
                    <>
                    <p>Sub total (0 items): <strong>$ 0</strong> </p>
                    <small>
                        <input type="checkbox"  /> <span>this order contains a gift</span>
                    </small>
                    </>
            ) } 
            decimalScale={2}
            suffix={"$"}
            displayType={"text"}
            thousandSeparator={true}
            value={0}
            /><div>
        <button className='subtotal-button'>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Subtotal