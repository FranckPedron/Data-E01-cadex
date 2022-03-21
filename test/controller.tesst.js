// On va mettre en place un test qui vérifie que le controleur est bien appelé

const controller = require("../app/controller");

// describe permet d'effectuer un groupe de test
describe("Test cadex",()=>{
    beforeAll(()=>{
        controller.cadex();
    });

    
});