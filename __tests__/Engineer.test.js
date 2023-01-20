const Engineer = require("../lib/Engineer");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name', 'id', 'email' and 'github' property when called with the 'new' keyword", () => {
            // Arrange
            const providedNameProp = "anEngineer";
            const providedIdProp = 10;
            const providedEmailProp = "testengineer@gmail.com";
            const providedGithub = "https://github.com/Andrew-TechMaster";

            // Act
            const engineerObj = new Engineer(providedNameProp, providedIdProp, providedEmailProp, providedGithub);

            // Assert
            expect(engineerObj.name).toBe(providedNameProp);
            expect(engineerObj.id).toBe(providedIdProp);
            expect(engineerObj.email).toBe(providedEmailProp);
            expect(engineerObj.github).toBe(providedGithub);
        });
    });

    describe("Get method", () => {
        it("should get engineer's GitHub address when getGithub() called", () => {
            // Arrange
            const providedGithub = "https://github.com/Andrew-TechMaster";
            const engineerObj = new Engineer("test", 1, "test", providedGithub);

            // Act
            const gettedGithub = engineerObj.getGithub();

            // Assert
            expect(gettedGithub).toEqual(providedGithub);
        });

        it("should get the value 'Engineer' when getRole() called", () => {
            // Arrange
            const expectedValue = 'Engineer';
            const engineerObj = new Engineer();
            
            // Act
            const gettedRole = engineerObj.getRole();

            // Assert
            expect(gettedRole).toBe(expectedValue);
        });
    });
});
