const request = require("supertest");

const app = require("../index");

// je teste si mon serveur se lance bien
describe("GET /v1/cadex", () => {
    it("should send an non empty string", async () => {
        // j'interroge mon serveur sur une route précise
        const response = await request(app).get("/v1/cadex");
        // j'attends un statut de retour 200 (OK)
        expect(response.status).toBe(200);
        // j'attends un body en retour qui fasse plus de 0 caractère
        expect(response.body.length).toBeGreaterThan(0);
    });
});
