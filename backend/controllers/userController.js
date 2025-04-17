import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { OAuth2Client } from 'google-auth-library';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

//route for user login
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });


    if (!user) {

      return res.json({ success: false, message: " User doesn't exist" })


    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {

      const token = createToken(user._id)
      res.json({ success: true, token })
    }
    else {
      res.json({ success: false, message: 'Invalid credentials' })
    }

  }

  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })


  }

}

//route for user register

const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    //checking user already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: " User already exist" })
    }


    // validating email formate and strong password
    if (!validator.isEmail(email)) {

      return res.json({ success: false, message: "please enter a valid email" })
    }
    if (password.length < 8) {

      return res.json({ success: false, message: "please enter a strong password" })
    }

    // hasing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)

    res.json({ success: true, token })




  } catch (error) {

    console.log(error);
    res.json({ success: false, message: error.message })

  }

}
//route for admin login 
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true,token})
    } else {
      res.json({success:false,message:"Invalid credentials"})
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }


}


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// route for Google OAuth login
const googleAuthUser = async (req, res) => {
  const { token } = req.body;

  try {
    // 1. Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    // 2. Check if user already exists
    let user = await userModel.findOne({ email });

    if (!user) {
      // 3. Create user with Google credentials
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(googleId, salt); // use Google sub as dummy password

      user = await userModel.create({
        name,
        email,
        password: hashedPassword,
        authType: 'google' // optional field in your model
      });
    }

    // 4. Generate JWT token
    const jwtToken = createToken(user._id);
    res.json({ success: true, token: jwtToken });

  } catch (error) {
    console.error('Google OAuth Error:', error);
    res.status(401).json({ success: false, message: 'Invalid Google token' });
  }
};


export { loginUser, registerUser, adminLogin, googleAuthUser }