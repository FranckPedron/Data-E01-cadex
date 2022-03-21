// On teste notre service !

const cadexService = require("../app/service/cadex");

// Données
const data = require("../data/parts.json");

const namesCollection = data.names;

// Service
const cadex = cadexService.generate();
const randomName = cadexService.getRandomName();

/*
describe : (message,function)
permet de former un groupe de test

test : (message,function)
it :  (message,function)
test & it permettent de tester quelque chose
*/

/* Je souhaite tester mon service cadex */
describe("Cadex object", () => {
    /* je vérifie si le cadex est un objet */
    it("should be an object", () => {
        expect(cadex).toBeInstanceOf(Object);
    });

    /* je vérifie que la propriété "name" est présente dans l'objet retourné */
    it("should have name,verb,component,adjective properties", () => {
        expect(cadex).toHaveProperty("name");
        expect(cadex).toHaveProperty("verb");
        expect(cadex).toHaveProperty("complement");
        expect(cadex).toHaveProperty("adjective");
    });
});

/* je souhaite tester ma fonction qui retourne un nom */
describe("Random name", () => {
    /* je teste le type (string) */
    it("should be a string", () => {
        expect(typeof randomName).toBe("string");
    });

    /* je teste qu'il soit bien dans la liste des names */
    it("should be in names collection", () => {
        expect(namesCollection).toContain(randomName);
    });
});
