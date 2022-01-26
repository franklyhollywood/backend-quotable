const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const user = await ProfileService.create(req.body);

    res.json(user);
  } catch (error) {
    next(error);
  }
});
