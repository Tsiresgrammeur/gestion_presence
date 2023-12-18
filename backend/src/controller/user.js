const userService = require('../service/user');
const SECRET='any secrets';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

class UserController {

  async  authenticate(req, res) {
    try {
      var user = await userService.getOneUser(req.body.email);
  
      if (!user) {
        return res.status(401).json({
          error: "No user with that email"
        });
      }
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
  
      if (validPassword) {
        const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
        return res.status(200).json({ success: true, token, role:user.role });
      } else {
        return res.status(401).json({ success: false, message: 'Password does not match' });
      }
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }


  async sendPassword(req,res) {
    const user= await userService.getOneUser(req.body.email);
    const generatedPassword = user.password.substring(10,19);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jeremybuendia29@gmail.com',
        pass: '1836547290'
      }
    });

    var mailOptions = {
      from: 'jeremybuendia29@gmail.com',
      to: req.body.email,
      subject: 'Password recovery',
      html: '<b>'+generatedPassword+'</b>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.status(201).json('Email sent: ' + info.response);
      }
    });
  }

  async changePassword(req,res)
  {
    const user= await userService.getOneUser(req.body.email);
    const generatedCode = user.password.substring(10,19);
    const validPassword= req.body.code == generatedCode;
    if(validPassword)
    {
      user.password = req.body.new_password;
      try{
        const id = await userService.updateUser(user.id,user);
        if(id)
          res.status(201).json({success: true});
      }

      catch(err){
        console.error(err);
      }

    }
    else
    {
      res.status(409).json({success: false, message:"The code you enterd is false"});
    }

  }


  async getUsers(req,res)
  {
    try{
      const users = await userService.getUsers();
      res.status(201).json(users);
    }

    catch(err){
      console.error(err);
    }

  }

  async getOneUser(req, res)
  {
    try{
      const user = await userService.getOneUser(req.params.id);
      res.status(201).json(user);
    }

    catch(err){
      console.error(err);
    }
  }

  validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // console.log(emailPattern.test(elementValue));
    return emailPattern.test(elementValue);
  }

  createUser = async (req,res) => {
    const right_format = this.validateEmail(req.body.email);
    if(req.body.last_name != "")
    {
      const user = await userService.getOneUser(req.body.email);
      if(user)
      res.status(400).json({success: false, message:"Cette email a été déjà inscrit"});

      if(right_format)
      {
        try {
          const id = await userService.createUser(req.body);
          if(id)
            res.status(201).json({success: true}); 
        }
        catch(err){
          console.error(err)
        }
      }
      else
      {
        res.status(409).json({ success:false, message: 'email format not validated' }) 
      }
    }
    else
    {
       res.status(409).json({ success:false, message: 'Last name must not be empty' }) 
    }
  }

  async deleteUser(req,res) {

    try{
      const id=await userService.deleteUser(req.params.id);
      if(id)
      res.status(201).json({success: true});
    }

    catch(err){
      console.error(err);
    }
  }

  async updateUser(req,res) 
  {
    try{
      const id = await userService.updateUser(req.params.id,req.body);
      if(id)
      res.status(201).json({success: true});
    }

    catch(err){
      console.error(err);
    }
  }



}


module.exports = new UserController();
