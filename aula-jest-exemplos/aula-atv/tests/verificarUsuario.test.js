test('/getAll - pegar os meus users', async () => { 
    const res = await fetch("http://localhost:3004/usuarios");
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
 });

 test('/get/id - pegar user especifico', async () =>{
    const res = await fetch("http://localhost:3004/usuarios/2");
    const data = await res.json();
    expect(data).toHaveProperty('id', '2');
 });