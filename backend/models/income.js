import mongoose from 'mongoose';

const incomeSchema = new mongoose.Schema({
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
        type : {
            type: String, 
            required: false,
            default:"income"
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
            default:"none",
            maxLength: 20,
            trim: true
        },

    },
    { timestamps : true }
);

const Income = mongoose.model('Income', incomeSchema);

export default Income;