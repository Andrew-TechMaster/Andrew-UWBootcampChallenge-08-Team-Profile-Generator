const Intern = require("../lib/Intern");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name', 'id', 'email' and 'school' property when called with the 'new' keyword", () => {
            // Arrange
            const providedNameProp = "anIntern";
            const providedIdProp = 77;
            const providedEmailProp = "goodintern@gmail.com";
            const providedschool = "University of Washington";

            // Act
            const internObj = new Intern(providedNameProp, providedIdProp, providedEmailProp, providedschool);

            // Assert
            expect(internObj.name).toBe(providedNameProp);
            expect(internObj.id).toBe(providedIdProp);
            expect(internObj.email).toBe(providedEmailProp);
            expect(internObj.school).toBe(providedschool);
        });
    });

    describe("Get method", () => {
        it("should get engineer's GitHub address when getGithub() called", () => {
            // Arrange
            const providedSchool = "Best University";
            const internObj = new Intern("test", 1, "test", providedSchool);

            // Act
            const gettedSchool = internObj.getSchool();

            // Assert
            expect(gettedSchool).toEqual(providedSchool);
        });

        it("should get the value 'Intern' when getRole() called", () => {
            // Arrange
            const expectedValue = 'Intern';
            const engineerObj = new Intern();
            
            // Act
            const gettedRole = engineerObj.getRole();

            // Assert
            expect(gettedRole).toBe(expectedValue);
        });
    });
});
