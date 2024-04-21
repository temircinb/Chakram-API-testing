const chakram = require('chakram'),
    expect = chakram.expect;

describe("User Tests", function () {

    it("GET /v2/user/{userName} getUserInfo", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/testQA");
        expect(response).to.have.status(200);
        return chakram.wait();
        
    });

    it("GET /v2/user/logout", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();
        
    });

    it("GET /v2/user/login", function () {
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=testQa&password=test1234");
        expect(response).to.have.status(200);
        return chakram.wait();
        
    });

    it("POST /v2/user userCreate", function () {
        const data = {
            "id": 564230,
            "username": "testQA",
            "firstName": "test",
            "lastName": "testest",
            "email": "deneme@test.com",
            "password": "test123",
            "phone": "235463886373",
            "userStatus": 0
        }

        const resData = {
            "code": 200,
            "type": "unknown",
            "message": "564230"
        }

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        
        return response.then(function(res){
            //console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);

        });
         
    });

    it("PUT /v2/user userUpdate", function () {
        const data = {
            "id": 0,
            "username": "testQA",
            "firstName": "test",
            "lastName": "deneme",
            "email": "test@test.com",
            "password": "12345",
            "phone": "443533827347",
            "userStatus": 0
        }

        const resData = {
            "code": 200,
            "type": "unknown",
            "message": "9223372036854755733"
        }

        const response = chakram.put("https://petstore.swagger.io/v2/user/testQA", data);
        
        return response.then(function(res){
            //console.log(res.body);
            expect(res).to.have.status(200);
            //expect(res).to.have.json(resData); -> reponse içeriğini gösterir.

        });
         
    });

    it("DELETE /v2/user/{username}", function () {
        const response = chakram.delete("https://petstore.swagger.io/v2/user/testQA");
        expect(response).to.have.status(200);
        return chakram.wait();
        
    });

   

    


});
