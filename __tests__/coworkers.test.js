// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../app");


describe("Coworkers list", () => {
  test("It should respond with an array of coworkers", async () => {
    const response = await request(app).get("/api/coworkers");
    expect(response.statusCode).toBe(200);
    // typeof body should be an array
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBe(response.body.totalLength);
  });

  test("Test pagination", async () => {
    const response = await request(app).get("/api/coworkers");
    expect(response.statusCode).toBe(200);
    // typeof body should be an array
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBe(response.body.totalLength);
  });

  test("Test pagination error", async () => {
    const response = await request(app).get("/api/coworkers?start=-1&end=10");
    expect(response.statusCode).toBe(400);
    console.log(response.body);
    expect(response.body).toEqual({"start": "Start must be greater than or equal to 0"});
  });
});

describe("Coworker details", () => {
  test("It should respond with a single coworker", async () => {
    const response = await request(app).get("/api/coworker/0");
    expect(response.statusCode).toBe(200);
    expect(typeof(response.body)).toBe('object');
  });
});