const express = require('express');
const {allCandidates, addCandidate} = require('../controllers/candidateController.js');

const candidateRouter = express.Router();

candidateRouter.get('/', allCandidates);
candidateRouter.post('/add', addCandidate);

module.exports=candidateRouter;
