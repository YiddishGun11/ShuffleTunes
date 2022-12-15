jest.mock('../../database/database.js');
const connexion = require('../../database/database');

const request =  require('supertest');
const app = require('../../server');

const sftp = require('ssh2-sftp-client');
jest.mock('ssh2-sftp-client');

const mockConnect = jest.fn();
const mockExists = jest.fn();
const mockPut = jest.fn();
const mockDelete = jest.fn();
const mockEnd = jest.fn();


sftp.mockImplementation(() => {
  return {
    connect: mockConnect,
    exists : mockExists,
    put : mockPut,
    delete : mockDelete,
    end: mockEnd
 }
});


describe("/UploadMusic", () => {

    beforeEach(() => {
        jest.resetModules();
    });
    
    describe("User don't send authorized files", () =>{
        it("Send string", async () => {
            const response = await request(app)
                .post("/uploadMusic")
                .attach({
                    'musicFile' : "AAAAAAAAA"
                })
    
            expect(response.status).toBe(400);
            expect(response.text).toBe("You must send autorized file(s)");
          
        })

        it("Send number", async () => {
            const response = await request(app)
                .post("/uploadMusic")
                .attach({
                    'musicFile' : 2546
                })
    
            expect(response.status).toBe(400);
            expect(response.text).toBe("You must send autorized file(s)");
          
        })

        it("Send array", async () => {
            const response = await request(app)
                .post("/uploadMusic")
                .attach({
                    'musicFile' : []
                })
    
            expect(response.status).toBe(400);
            expect(response.text).toBe("You must send autorized file(s)");
          
        })

        it("Send object", async () => {
            const response = await request(app)
                .post("/uploadMusic")
                .attach({
                    'musicFile' : 2546
                })
    
            expect(response.status).toBe(400);
            expect(response.text).toBe("You must send autorized file(s)");
        })

        it("Send a random file", async () => {

            const response = await request(app)
                .post("/uploadMusic")
                .attach(
                    'musicFile', 'test/uploadMusic/test.txt'
                )

            expect(response.status).toBe(500);
        })
    })

    describe("User is not connected", () => {

        it ("Invalid session", async () => {
            connexion.query.mockRejectedValue({
                "pseudo": null
              });
            const response = await request(app)
                .post("/uploadMusic")
                .set('Cookie', ['sessionId=46846'])
                .attach(
                    'musicFile', 'test/uploadMusic/test.mp3'
                )

            expect(response.status).toBe(403);
            expect(response.text).toBe("You have to be connected");
        })

        it ("No session cookie", async () => {
            connexion.query.mockRejectedValue({
                "pseudo": null
              });
            const response = await request(app)
                .post("/uploadMusic")
                .attach(
                    'musicFile', 'test/uploadMusic/test.mp3'
                )

            expect(response.status).toBe(403);
            expect(response.text).toBe("You have to be connected");
        })
    })

    describe("User is connected and send musicFile", () => {

        it ("Can't connect to the SFTP server", async() => {
            connexion.query.mockResolvedValue(
                [[[{"pseudo": "ChaosArnhug"}]]]
                );

            mockConnect.mockReturnValue(Promise.resolve(false));
            
            const response = await request(app)
            .post("/uploadMusic")
            .set('Cookie', ["sessionId=s%3Ab51cb9f1-0aa2-4f0c-b6e3-4542b20bdc8a.oD8u4yUpGkqsAOT2XvXSZMpVy8gNVMra8LqcT5tc%2B5E"])
            .attach(
                'musicFile', 'test/uploadMusic/test.mp3'
            )

            expect(response.status).toBe(500);
        })

        it ("User don't have a directory into the SFTP server", async() => {
            connexion.query.mockResolvedValue(
                [[[{"pseudo": "ChaosArnhug"}]]]
                );

            mockConnect.mockReturnValue(Promise.resolve(true));
            mockExists.mockReturnValueOnce(Promise.resolve(false))
            mockPut.mockReturnValue(Promise.resolve(true));
            mockEnd.mockReturnValue(Promise.resolve(true));
            
            const response = await request(app)
            .post("/uploadMusic")
            .set('Cookie', ["sessionId=s%3Ab51cb9f1-0aa2-4f0c-b6e3-4542b20bdc8a.oD8u4yUpGkqsAOT2XvXSZMpVy8gNVMra8LqcT5tc%2B5E"])
            .attach(
                'musicFile', 'test/uploadMusic/test.mp3'
            )

            expect(response.status).toBe(500);
        })

        it ("Music already exist into the user directory", async() => {
            connexion.query.mockResolvedValue(
                [[[{"pseudo": "ChaosArnhug"}]]]
                );

            mockConnect.mockReturnValue(Promise.resolve(true));
            mockExists.mockReturnValueOnce(Promise.resolve('d')).mockReturnValueOnce(Promise.resolve(true))
            mockEnd.mockReturnValue(Promise.resolve(true));
            
            const response = await request(app)
            .post("/uploadMusic")
            .set('Cookie', ["sessionId=s%3Ab51cb9f1-0aa2-4f0c-b6e3-4542b20bdc8a.oD8u4yUpGkqsAOT2XvXSZMpVy8gNVMra8LqcT5tc%2B5E"])
            .attach(
                'musicFile', 'test/uploadMusic/test.mp3'
            )

            expect(response.status).toBe(201);
            expect(response.text).toBe("The music are now uploaded");
        })

        it ("Can't connect to the DB", async() => {
            connexion.query.mockResolvedValueOnce([[[{"pseudo": "ChaosArnhug"}]]])
                    .mockRejectedValue();

            mockConnect.mockReturnValue(Promise.resolve(true));
            mockExists.mockReturnValueOnce(Promise.resolve('d')).mockReturnValueOnce(Promise.resolve(false))
            mockPut.mockReturnValue(Promise.resolve(true));
            mockEnd.mockReturnValue(Promise.resolve(true));
            
            const response = await request(app)
            .post("/uploadMusic")
            .set('Cookie', ["sessionId=s%3Ab51cb9f1-0aa2-4f0c-b6e3-4542b20bdc8a.oD8u4yUpGkqsAOT2XvXSZMpVy8gNVMra8LqcT5tc%2B5E"])
            .attach(
                'musicFile', 'test/uploadMusic/test.mp3'
            )

            expect(response.status).toBe(500);
        })

        it ("Music is upload correctly", async() => {
            connexion.query.mockResolvedValue(
                [[[{"pseudo": "ChaosArnhug"}]]]
                );

            mockConnect.mockReturnValue(Promise.resolve(true));
            mockExists.mockReturnValueOnce(Promise.resolve('d')).mockReturnValueOnce(Promise.resolve(false))
            mockPut.mockReturnValue(Promise.resolve(true));
            mockEnd.mockReturnValue(Promise.resolve(true));
            
            const response = await request(app)
            .post("/uploadMusic")
            .set('Cookie', ["sessionId=s%3Ab51cb9f1-0aa2-4f0c-b6e3-4542b20bdc8a.oD8u4yUpGkqsAOT2XvXSZMpVy8gNVMra8LqcT5tc%2B5E"])
            .attach(
                'musicFile', 'test/uploadMusic/test.mp3'
            )

            expect(response.status).toBe(201);
            expect(response.text).toBe("The music are now uploaded");
        })
    })
})