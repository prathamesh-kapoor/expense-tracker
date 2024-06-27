import mongoose from "mongoose";
import Income from "../models/income.js";


//income department
export const getIncomes = async(req,res)=>{
    try{
        const transactions = await Income.find({}).sort({createdAt:-1});
        res.status(200).json(transactions);
    }
    catch(error){
        res.status(500).json(error);
    }
    
}

export const addIncome = async(req,res)=>{
    //  const data =
    const{person,title, type, amount, category, description, date} = req.body;
    try{
        const transaction = await Income.create({person, type, amount, category, description, date, title});
        res.status(200).json(transaction);
    }catch(error){
       res.status(400).json({error: error.message});
    }
}

export const deleteIncome = async(req,res)=>{
    const{ id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
       }

       const transaction = await Income.findOneAndDelete({_id:id});

       if(!transaction){
        return res.status(400).json({error: 'No such transaction'});
    }
      res.status(200).json(transaction);
}