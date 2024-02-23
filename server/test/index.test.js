const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

const character = {id: 1, name: "Rick Sanchez", species: "Human", status: "Alive"};
const character2 = {id: 2, name: "Lulu", species: "Human", status: "Alive"};

describe('Test de RUTAS', ()=>{

    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const {body} = await agent.get('/rickandmorty/character/1')
            
            expect(body).toHaveProperty(
                'id' &&
                'species' &&
                'name' &&
                'gender' &&
                'status' &&
                'origin' &&
                'image'
                );
        })

        it('Si hay un error responde con status: 500', async ()=>{
            await agent.get('/rickandmorty/character/98765').expect(500);
        })
    })

    describe('GET /rickandmorty/login', ()=>{
        it('valida credenciales correctos', async ()=>{
            const response =  await agent.get('/rickandmorty/login?email=josedariorf@gmail.com&password=jose1234').expect(200);
            expect(response.body).toEqual({ access: true });
        });

        it('valida credenciales incorrectos', async ()=>{
            const response =  await agent.get('/rickandmorty/login?email=josedariorf@gmail.com&password=jose34').expect(200);
            expect(response.body).toEqual({ access: false });
        });
    })

    describe('POST /rickandmorty/fav', ()=>{
        it('Lo que se envia por body debe ser devuelto en un array', async ()=>{
            const response = await agent.post('/rickandmorty/fav').send(character).expect(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body).toContainEqual(character);
        })

        it('Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async ()=>{
            const response = await agent.post('/rickandmorty/fav').send(character2).expect(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body).toContainEqual(character2);
            expect(response.body).toEqual([character, character2]);
        })
        
    })

    describe('DELETE /rickandmorty/fav/:id', ()=>{
        it('en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar', async ()=>{
            const response = await agent.delete('/rickandmorty/fav/9999').expect(200);
            expect(response.body).toEqual([character, character2]);
        });

        it('cuando envías un ID válido se elimine correctamente al personaje', async ()=>{
            const response = await agent.delete('/rickandmorty/fav/1').expect(200);
            expect(response.body).toEqual([character2]);
        })
   })
});
