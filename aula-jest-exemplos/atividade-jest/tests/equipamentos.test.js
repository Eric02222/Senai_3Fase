import jsonServer from "json-server";

let server;
const baseUrl = "http://localhost:5000"

beforeAll((done) => {
    const app = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    app.use(router);
    app.use(middlewares);

    server = app.listen(5000, done);
})

afterAll((done) => {
    server.close(done);
})

test('GET /equipamentos', async () => {
    const res = await fetch(`${baseUrl}/equipamentos`);
    if (!res) res.status(404)

    expect(res.status).toBe(200);
}
)

test('GET /equipamentos/:id', async () => {
    const res = await fetch(`${baseUrl}/equipamentos/2`);
    const data = await res.json();
    if (!data || !res) res.status(404)

    expect(data).toHaveProperty("id", 2);
}
)


test('POST /equipamentos', async () => {
    const novoEsquipamento = { titulo: "Serra", preco: 513 }
    const res = await fetch(`${baseUrl}/equipamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoEsquipamento),
    });

    if (!novoEsquipamento) {
        res.status(500)
    }

    const data = await res.json();
    expect(data.preco).toBeGreaterThan(350);
}
)


test('PATCH /equipamentos/:id', async () => {
    const res = await fetch(`${baseUrl}/equipamentos/1`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nomeEq: "maquita irada" })
    });
    data = await res.json();

    expect(data.preco).toBeLessThan(810);
}
)

test('PUT /equipamentos/:id', async () => {
    const res = await fetch(`${baseUrl}/equipamentos/2`, {
        method: "PUT",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify({
            id: 2,
            nomeEq: "Paralelas Abdominal irado",
            preço: 350
        })
    });

    if (!res) res.status(404)
    expect(res.status).toBe(200);
}
)


test('DELETE /equipamentos/:id', async () => {
    await fetch(`${baseUrl}/equipamentos/12`, { method: "DELETE" });
    res = await fetch(`${baseUrl}/equipamentos/12`)

    expect(res.status).toBe(404);
}
)

