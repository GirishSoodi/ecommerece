import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using cod method

const placeOrder = async (req,res) => {
    try {
        
        const { userId, items, amount, address} =req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})


    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

//Placing orders using stripe method
const placeOrderStripe = async (req,res) => {

}

//placing orders using razor method
const placeOrderRazorpay = async (req,res) =>{

}

//all orders data for admin panel
const allOrders = async (req,res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}

//user order data for frontend
const userOrders = async (req,res) => {

    try {
         
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
    
}

//update order status
const updateStatus = async (req,res) => {

}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}