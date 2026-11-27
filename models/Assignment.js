const mongoose=require('mongoose')

const assignmentSchema=new mongoose.Schema({
//assignment title
title:{
    type:String,
    required: true
},
//assignment course
course:{
    type:String,
    required:true
},
//assignment duedate
dueDate:{
    type: Date,
    required:true
},
//what needs to be accomplished
goal:{
    type:String,
},
//assignment status
status:{
    type:String,
    enum: ["Not Started", "Started", "Finished"],
    default:'Not Started'
}
})

module.exports=mongoose.model('Assignment',assignmentSchema);