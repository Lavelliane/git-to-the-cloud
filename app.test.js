const request = require('supertest')
const app = require('./app')

describe("GET /", () => {
    it("responds hello world text", async () => {
        const response = await request(app).get('/')
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello world")
    })
})

describe("GET /wazup", () => {
    it("responds with 'wazuppp'", async () => {
      const response = await request(app).get("/wazup");
      expect(response.status).toBe(200);
      expect(response.text).toBe("wazuppp");
    });
  });