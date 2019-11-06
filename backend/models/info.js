const mongoose = require ("mongoose");
const schema =mongoose.Schema ; // méthode définti fi mongoose pour définir db 
// create Schema 
const InfoSchema = new schema({

name :{ type: String  },
image :{ type: String  },
phone:{ type: String },
subject :{type:String  },
date:{type:Date ,default:Date.now }
});
module.exports=Info=mongoose.model("info" ,InfoSchema);
