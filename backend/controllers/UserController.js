const { v4: uuidv4 } = require('uuid');


const customHttpError = require('../models/CustomHttpError');
const customMessages = require('../constants/CustomMessages');

const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      email: 'test@test.com',
      password: 'testers'
    }
  ];
  
  const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS });
  };
  

  const signup = (req, res, next) => {
    const { name, email, password } = req.body;
  
    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if (hasUser) {
       return next( new customHttpError(customMessages.USER_ALREADY_EXIST, 422));
    }
  
    const createdUser = {
      id: uuidv4(),
      name, // name: name
      email,
      password
    };
  
    DUMMY_USERS.push(createdUser);
  
    res.status(201).json({user: createdUser});
  };
  

  const login = (req, res, next) => {
    const { email, password } = req.body;
  
    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
      return  next( new customHttpError(customMessages.INVALID_CREDENTIALS, 401));
    }
  
    res.json({message: 'Logged in!'});
  };
  
  exports.getUsers = getUsers;
  exports.signup = signup;
  exports.login = login;
  