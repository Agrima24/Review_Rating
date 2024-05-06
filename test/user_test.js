const server = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const utils = require("../models/userModelSchema");
const routes = require("../router/userRouter");

chai.should();
chai.use(chaiHttp);

describe("User Login Api", () => {
  describe("POST/api/users", () => {
    it("It should return login user detail:", (done) => {
      const data = {
        userEmail: "kkk@gmail.com",
        userPassword: "Kratu@14",
      };
      chai
        .request(server)
        .post("/user/signin")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a("object");
          res.body.should.have.property("success").eq("success");
          res.body.should.have.property("message").eq("Successfully login");
          res.body.should.have.property("token");
          done();
        });
    });
  });
});

it("It should return error message:", (done) => {
  const data = {
    userEmail: "rsr@gmail.com",
    userPassword: "Kratu@14",
  };
  chai
    .request(server)
    .post("/user/signin")
    .send(data)
    .end((err, res) => {
      res.should.have.status(400);
      res.body.should.have.property("success").eq("failure");
      res.body.should.have.property("message").eq("Invalid credentials");
      done()
    });
});
// for password
it("It should return error message:", (done) => {
    const data = {
      userEmail: "kkk@gmail.com",
      userPassword: "Santu#14",
    };
    chai
      .request(server)
      .post("/user/signin")
      .send(data)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("success").eq("failure");
        res.body.should.have.property("message").eq("Email or Password is not valid");
        done()
      });
  });

