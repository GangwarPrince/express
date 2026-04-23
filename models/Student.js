const mongosse = require('mongoose');

const studentSchema = new mongosse.Schema({
    name:{
        type:String,
        required:true
    },
    regNo:{
        type:Number,
        required:true,
        min:100000000
    },
    program:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


module.exports=mongosse.model("Student",studentSchema);