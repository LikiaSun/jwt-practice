const request = require("supertest");
const app = require("../../app");

describe("GET endpoint", () => {
  it("response /exist", async () => {
    const res = await request(app).get("/exist");
    expect(res.statusCode).toEqual(200);
  });
});
