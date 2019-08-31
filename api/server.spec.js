const request = require("supertest");
const db = require("../database/dbConfig");
const server = require("./server");

describe("server.js", () => {
  // it("should be in testing", () => {
  //   expect(process.env.DB_ENV).toBe("testing");
  // });

  afterAll(async () => {
    await db("users").truncate();
  });

  describe("POST /register", () => {
    it("should create user", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "testguy", password: "password123" })
        .then(response => {
          expect(response.status).toBe(201);
          headers(response);
        });
    });

    it("return 500 error for wrong field name", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ name: "testguy", password: "lamepassword" })
        .then(response => {
          expect(response.status).toBe(500);
          expect(response.type).toBe("application/json");
        });
    });
  });

  describe("POST /login", () => {
    it("should log userm in", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "testguy", password: "password123" })
        .then(response => {
          headers(response);
          expect(response.status).toBe(200);
        });
    });

    it("should return a JSON object", () => {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "testguy", password: "password123" })
        .then(response => {
          expect(response.type).toBe("application/json");
        });
    });
  });
});

function headers(res) {
  return expect(res.type).toBe("application/json");
}
