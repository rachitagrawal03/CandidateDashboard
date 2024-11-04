const Candidate = require('./../models/candidateModel.js');

const allCandidates = async (req, res)=>{
    try {
        const candidate = await Candidate.find({});
        if(!candidate){
            return res.status(404).json({error: "Candidates Not Found"});
        }
        console.log(`candidates found: ${candidate}`);
        res.status(200).json({success: true, data: candidate});
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({error: "Internal Server Error"});
    }    
}

const addCandidate = async (req, res) => {
    try {
        const data = req.body;
        const candidate = new Candidate(data);
        const response = await candidate.save();
        console.log("candidate added");
        res.status(200).json({message: "Candidate Added Successfully", addedData: response});
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {allCandidates, addCandidate};