
const apiUrl = "http://localhost:5000";

test('Get/ retorna usuarios', async () => {
   const res = await fetch(`${apiUrl}/usuarios?page=1&limit=20`);
   expect(res.status).toBe(200)
});


test('Get/ usuario especifico', async () => {
   const res = await fetch(`${apiUrl}/usuarios/1`);
   const data = await res.json();
   expect(data.nome).toBe("Marcos Dias");
})


test('Post/ usuarios', async () => {
   const novoUsuario = {
      nome: "João Santo DIas a",
      email: "SantoDiasa@gmail.com",
      senha: "123",
      cargo: "Médico"
   }
   const res = await fetch(`${apiUrl}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoUsuario),
   });

   const data = await res.json()
   await fetch(`${apiUrl}/usuarios/${data.id}`, {method: "DELETE"});

   expect(data.email).toBe("SantoDiasa@gmail.com")
});

test('Put/ atualizar usuario', async () => {
   const res = await fetch(`${apiUrl}/usuarios/22`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         nome: "Fabio daoras",
         email: "fqw@gmail.com",
         senha: "694",
         cargo: "Médico"
      }),
   })

   const data = await res.json()
   expect(data.data.email).toBe("fqw@gmail.com");
});

test('PATCH/ atualizar email Usuario', async () => {
   const res = await fetch(`${apiUrl}/usuarios/67`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         email: "asd2@gmail.com",
      }),
   })
   const data = await res.json()
   expect(data.data.email).toBe("asd2@gmail.com");
});


test('DELETE/ deletar usuario especifico', async () => {
   await fetch(`${apiUrl}/usuarios/3`, {method: "DELETE"});
   const res = await fetch(`${apiUrl}/usuarios/3`);
   expect(res.status).toBe(404);
})

test("Fluxo completo de usuário", async () => {
   // cria
   let res = await fetch(`${apiUrl}/usuarios`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         nome: "teste",
         email: "teste@gmail.com",
         senha: "123",
         cargo: "Médico"
       }),
   });
   let user = await res.json();

   // pega
   res = await fetch(`${apiUrl}/usuarios/${user.id}`);
   let data = await res.json();
   expect(data).toHaveProperty("nome", "teste");

   // deleta
   await fetch(`${apiUrl}/usuarios/${user.id}`, { method: "DELETE" });
   res = await fetch(`${apiUrl}/usuarios/${user.id}`);
   expect(res.status).toBe(404);
});
