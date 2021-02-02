const helpers={};

helpers.Success=(data,msg=null)=>{
    if(msg===null){
        return {status:true,data:data}
    }else{
        return {status:true,message:msg,data:data}
    }
}
helpers.Error=(msg,data=null)=>{
    if(data===null){
        return {status:false,message:msg};
    }else{
        return {status:false,message:msg,data:data};
    }
}

module.exports=helpers;