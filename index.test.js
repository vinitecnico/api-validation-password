const index = require("./")
const request = require("supertest")

describe("index aplication", () => {
  test("should start aplication", () => {
    expect(typeof index).toBe("function")
  })

  test("should set null response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set aa response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "aa" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set ab response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "ab" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set AAAbbbCc response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "AAAbbbCc" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set AbTp9!foo response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "AbTp9!foo" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set AbTp9!foA response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "AbTp9!foA" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set AbTp9 fok response false", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "AbTp9 fok" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(false)
  })

  test("should set AbTp9!fok response true", async () => {
    const response = await request(index)
      .post("/api/isvalid")
      .send({ value: "AbTp9!fok" })
    expect(response.statusCode).toBe(200)
    const data = JSON.parse(response.text)
    expect(data.valid).toEqual(true)
  })
})
