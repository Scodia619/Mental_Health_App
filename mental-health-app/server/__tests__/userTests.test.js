const app = require("../server");
const request = require("supertest");

describe("GET /api", ()=>{
    test("GET: /api", ()=>{
        return request(app)
        .get("/api")
        .expect(200)
        .then(({body}) => {
            expect(body.message).toBe("Hello World!")
        })
    })
})