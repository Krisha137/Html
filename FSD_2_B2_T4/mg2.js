// insert multiple connections at a time

const mg=require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/mdb2")
.then(()=>{console.log("success")})
.catch((e)=>{console.log(e)})

const myschema=new mg.Schema(
    {   username:String,
        age:Number,
        active:Boolean,
        doj:{type:Date,
            default:new Date().toLocaleDateString()
            }
    },{strict:false,versionKey:false}
    // strict --> it allows to add new field if it will come
)

mg.pluralize(null); // je tame name banavo tenu j banavshe people no thay
const mymodel=new mg.model("person",myschema)

const newfun=async()=>{
    try{
        const data=[
            {username:'Bhim',age:28,active:false},
            {username:'Chutki',age:26,active:false},
            {username:'Doremon',age:38,active:false},
        ]
        const result=await mymodel.insertMany(data);
        console.log(result);
    }
    catch(e){
        console.log(e)
    }
}

newfun()