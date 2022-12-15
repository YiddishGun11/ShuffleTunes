const childProcess = require('child_process')
jest.mock('child_process');

const mockExec = jest.fn();

childProcess.mockImplementation(() => {
    return {
      exec: mockExec
   }
  });

  const code = require('../controllers/exec.js');

  describe("TEST", () => {
    it("Ceci est un test", () => {
        mockExec.mockReturnValue("tata")
        const returnValue = code.playSong();
        expect(returnValue).toBe("tata");
    })
  })

