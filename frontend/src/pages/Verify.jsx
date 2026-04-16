import React, { useContext, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const Verify = () => {
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')
  const { token, backendUrl, setCartItems } = useContext(ShopContext)
  const navigate = useNavigate()

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const { data } = await axios.post(
          backendUrl + '/api/order/verifyStripe',
          { success, orderId },
          { headers: { token } }
        )
        if (data.success) {
          setCartItems({})
          navigate('/orders')
        } else {
          toast.error('Payment failed')
          navigate('/cart')
        }
      } catch (error) {
        toast.error(error.message)
        navigate('/cart')
      }
    }

    if (token) verifyPayment()
  }, [token])

  return <div className='min-h-[60vh] flex items-center justify-center'>Verifying payment...</div>
}

export default Verify
