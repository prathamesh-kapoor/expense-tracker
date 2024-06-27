import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        date:{ 
            type: Date,
            required:false
        },
        amount: {
            type:Number,
            required:true
        }, 
        type : { //credit or debit  useful if you use one schema for all the transaction 
            type: String, 
            required: false,
            default: "expense"
        },
        category: {
            type: String,
            required: false,
            default:"other",
            trim: true
        },
        description: {
            type: String,
            required: false,
            maxLength: 20,
            default:"none",
            trim: true
        },

    },
    { timestamps : true }
);

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;