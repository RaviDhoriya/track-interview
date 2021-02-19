const chai=require("chai");
const chaiHttp=require("chai-http");

var should=chai.should();
chai.use(chaiHttp);

var server=require("../index");

describe("Signup & Login",()=>{
    describe("/POST Signup",()=>{
        it("It should signup new user.",(done)=>{
            chai.request(server)
                .post("/api/signup")
                .set('Content-Type','application/json')
                .send({name:"Test user",email:"test@gmail.com",password:"123456"})
                .end((err,res)=>{
                    (res).should.have.status(200);
                    done();
                });
        });
    });
    describe("/POST Login",()=>{
        it("It should do successful login",(done)=>{
            chai.request(server)
                .post("/api/login")
                .set('Content-Type','application/json')
                .send({email:"test@gmail.com",password:"123456"})
                .end((err,res)=>{
                    (res).should.have.status(200);
                    done();
                });
        });
    });
    
});