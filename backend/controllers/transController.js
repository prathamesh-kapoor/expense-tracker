import mongoose from "mongoose";
import Expense from "../models/expense.js";



//expense department
export const getExpenses = async(req,res)=>{
    try{
        const transactions = await Expense.find({}).sort({createdAt:-1});
        res.status(200).json(transactions);
    }
    catch(error){
        res.status(500).json(error);
    }
    
}

export const addExpense = async(req,res)=>{
    //  const data =
    const{person,title, type, amount, category, description, date} = req.body;
    try{
        const transaction = await Expense.create({person,title, type, amount, category, description, date});
        res.status(200).json(transaction);
    }catch(error){
       res.status(400).json({error: error.message});
    }
}

export const deleteExpense = async(req,res)=>{
    const{ id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'});
       }

       const transaction = await Expense.findOneAndDelete({_id:id});

       if(!transaction){
        return res.status(400).json({error: 'No such transaction'});
    }
      res.status(200).json(transaction);
}