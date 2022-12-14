//mocker la database
jest.mock('../../database/database.js');
const connexion = require('../../database/database');

const request =  require('supertest');
const app = require('../../server');

describe("POST /createplaylist", () => {

    beforeEach(() => {
        jest.resetModules();
    })

    describe("Playlist name that will generate errors", () => {

        it("playlistName is missing", async() => {
            const response = await request(app)
                .post("/createplaylist")
                .send({
                    playlistName : null
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe('A valid playlist name is required');
            expect(response.body[1]["msg"]).toBe('playlist name must be a string of characters');
            expect(response.body[2]["msg"]).toBe('playlist name must be between 3 and 30 characters');
        })

        it("playlistName is an object", async() => {
            const response = await request(app)
                .post("/createplaylist")
                .send({
                    playlistName : {"nom" : "CAVAPETER!"}
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe('playlist name must be a string of characters');
        })

        it("playlistName is an array", async() => {
            const response = await request(app)
                .post("/createplaylist")
                .send({
                    playlistName : ["shit1", "shit2", "shit3"]
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe('playlist name must be a string of characters');
        })

        it("playlistName is an empty string", async() => {
            const response = await request(app)
                .post("/createplaylist")
                .send({
                    playlistName : ""
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe('A valid playlist name is required');
            expect(response.body[1]["msg"]).toBe('playlist name must be between 3 and 30 characters');
            
        })

        it("playlistName is a number", async() => {
            const response = await request(app)
                .post("/createplaylist")
                .send({
                    playlistName : 132135465432
                })

            expect(response.status).toBe(400);
            expect(response.body[0]["msg"]).toBe('playlist name must be a string of characters');
        })
    })
})