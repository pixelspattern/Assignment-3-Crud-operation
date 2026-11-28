// routes/assignments.js
const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// GET /assignments: list all assignments, soonest due date first
router.get('/', async (req, res, next) => {
  try {
    const assignments = await Assignment.find().sort({ dueDate: 1 });
    res.render('assignments/list', { title: 'Assignments', assignments });
  } catch (err) {
    next(err);
  }
});

module.exports = router;