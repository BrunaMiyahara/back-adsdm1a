const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

test("Get/produtos retorna o status 200 e um conteúdo do tipo JSON", async function(){
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Get/produtos/1 retorna o status 200 e um conteúdo do tipo JSON", async function(){
    const response = await request.get("/produtos/1");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Get/produtos/100 retorna o status 404 e um conteúdo do tipo JSON", async function(){
    const response = await request.get("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("POST/produtos com um JSON 'nome': 'uva', 'preco': 20.00 retorna o status 404 e um conteúdo do tipo JSON", async function () {
    const response = await request
      .post("/produtos")
      .send({ nome: "Uva", preco: 20.00 });
    expect(response.status).toBe(201);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("POST/produtos sem um JSON e retorna o status 422 e um conteúdo do tipo JSON", async function () {
    const response = await request.post("/produtos");
    expect(response.status).toBe(422);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 200 e um JSON no PUT", async function () {
    const response = await request
    .put("/produtos/1")
    .send({ nome: "Uva verde", preco: 18.00 });
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 404 e um JSON no PUT", async function () {
    const response = await request
    .put("/produtos/100")
    .send({ nome: "Uva verde", preco: 18.00 });
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
});

test("Deve retornar status 204 e um JSON no GET id", async function () {
    const response = await request.delete("/produtos/1");
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
});

test("Deve retornar status 404 e um JSON no DELETE ", async function () {
    const response = await request.delete("/produtos/100");
    expect(response.status).toBe(404);
    expect(response.headers["content-type"]).toMatch(/json/);
}); 