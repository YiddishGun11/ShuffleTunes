jest.mock('../database/database.js');
const connexion = require('../database/database');

const request =  require('supertest');
const app = require('../server');

describe("POST /register", () => {

    beforeEach(() => {
        jest.resetModules();
    });

    describe("Pseudo values that will generate errors", () => {
        
        it("Pseudo is missing", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: null,
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo is required");
            expect(response.body[1]["msg"]).toBe("Pseudo must be a string of characters");
            expect(response.body[2]["msg"]).toBe("Pseudo must be between 5 and 20 characters");
        })

        it("Pseudo is an object", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: {},
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo must be a string of characters");
        })

        it("Pseudo is an array", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: [],
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo must be a string of characters");
        })

        it("Pseudo is a number", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: 1235,
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo must be a string of characters");
        })

        it("Pseudo is a empty string", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo is required");
            expect(response.body[1]["msg"]).toBe("Pseudo must be between 5 and 20 characters");
        })

        it("Pseudo is a string with less than 5 caracters", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaa",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo must be between 5 and 20 characters");
        })

        it("Pseudo is a string with more than 20 caracters", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaaaaaaaaaaaaaa",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Pseudo must be between 5 and 20 characters");
        })  
    })

    describe("Password values that will generate errors", () => {
        
        it("Pseudo is missing", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password:null
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password is required");
            expect(response.body[1]["msg"]).toBe("Password must be a string of characters");
            expect(response.body[2]["msg"]).toBe("Password must be between 128 characters long");
        })

        it("Password is an object", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password:{}
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password must be a string of characters");
        })

        it("Password is an array", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password: []
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password must be a string of characters");
        })

        it("Password is a number", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password: 12345
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password must be a string of characters");
        })

        it("Password is a empty string", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password: ""
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password is required");
            expect(response.body[1]["msg"]).toBe("Password must be between 128 characters long");
        })

        it("Password is a string with less than 128 caracters", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password: "aaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password must be between 128 characters long");
        })

        it("Pseudo is a string with more than 128 caracters", async () => {
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "aaaaaaaaaa",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe("Password must be between 128 characters long");
        })  
    })

    describe("Pseudo and Password are OK => DB Call", () => {

        it("User is now registered", async () => {
            connexion.query.mockResolvedValue();
            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "bbbbbbbbbbb",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })
            expect(response.status).toBe(201);
            expect(response.text).toBe('Your account is now created');
        })

        it("User already exist", async () => {
            connexion.query.mockRejectedValue({
                "message": "Pseudo already exist",
                "sqlState": "45000"
              });

            const response = await request(app)
                .post("/register")
                .send({
                    pseudo: "bbbbbbbbbbb",
                    password: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                })
            expect(response.status).toBe(409);
            expect(response.text).toBe('Pseudo already exist');
        })

    })
})