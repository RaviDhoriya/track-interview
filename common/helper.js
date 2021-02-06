const helpers={};
helpers.JWT_SECRET="Th!s_IS_SomeC0mplex-s3cr3t&*)#7004";
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