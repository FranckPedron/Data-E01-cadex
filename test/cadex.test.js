// On teste notre service !

const cadexService = require("../app/service/cadex");

// Données
const data = require("../data/parts.json");

const namesCollection = data.names;
const verbsCollection = data.verbs;
const adjectivesCollection = data.adjectives;
const complementsCollection = data.complements;

// Service
const cadex = cadexService.generate();
const randomName = cadexService.getRandomName();
const randomVerb = cadexService.getRandomVerb();
const randomAdjective = cadexService.getRandomAdjective();
const randomComplement = cadexService.getRandomComplement();

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

/* je souhaite tester ma fonction qui retourne un verbe */
describe("Random verb", () => {
    /* je teste le type (string) */
    it("should be a string", () => {
        expect(typeof randomVerb).toBe("string");
    });

    /* je teste qu'il soit bien dans la liste des verbs */
    it("should be in verbs collection", () => {
        expect(verbsCollection).toContain(randomVerb);
    });
});

/* je souhaite tester ma fonction qui retourne un adjectif */
describe("Random adjective", () => {
    /* je teste le type (string) */
    it("should be a string", () => {
        expect(typeof randomAdjective).toBe("string");
    });

    /* je teste qu'il soit bien dans la liste des adjectives */
    it("should be in adjectives collection", () => {
        expect(adjectivesCollection).toContain(randomAdjective);
    });
});

/* je souhaite tester ma fonction qui retourne un complement */
describe("Random complement", () => {
    /* je teste le type (string) */
    it("should be a string", () => {
        expect(typeof randomComplement).toBe("string");
    });

    /* je teste qu'il soit bien dans la liste des complements */
    it("should be in complements collection", () => {
        expect(complementsCollection).toContain(randomComplement);
    });
});

describe("Generate sentence", () => {
    const phrase = cadex.glue();

    it("should be a string", () => {
        expect(typeof phrase).toBe("string");
    });

    it("should be a sentence with name,adjective,verb,complement", () => {
        expect(phrase).toContain(cadex.name);
        expect(phrase).toContain(cadex.verb);
        expect(phrase).toContain(cadex.complement);
        expect(phrase).toContain(cadex.adjective);
    });
});
