const Manager = require("../lib/Manager");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name', 'id', 'email' and 'officeNumber' property when called with the 'new' keyword", () => {
            // Arrange
            const providedNameProp = "testManager";
            const providedIdProp = 1234;
            const providedEmailProp = "testmanager@gmail.com";
            const providedOfficeNumberProp = 5678;

            // Act
            const managerObj = new Manager(providedNameProp, providedIdProp, providedEmailProp, providedOfficeNumberProp);

            // Assert
            expect(managerObj.name).toBe(providedNameProp);
            expect(managerObj.id).toBe(providedIdProp);
            expect(managerObj.email).toBe(providedEmailProp);
            expect(managerObj.officeNumber).toBe(providedOfficeNumberProp);
        });
    });

    describe("Get method", () => {
        it("should get manager's office number when getOfficeNumber() called", () => {
            // Arrange
            const providedNameProp = "testManager";
            const providedIdProp = 1234;
            const providedEmailProp = "testmanager@gmail.com";
            const providedOfficeNumberProp = 5678;
            const managerObj = new Manager(providedNameProp, providedIdProp, providedEmailProp, providedOfficeNumberProp);

            // Act
            const gettedOfficeNumber = managerObj.getOfficeNumber();

            // Assert
            expect(gettedOfficeNumber).toBe(providedOfficeNumberProp);
        });

        it("should get the value 'Manager' when getRole() called", () => {
            // Arrange
            const expectedValue = 'Manager';
            const managerObj = new Manager();
            
            // Act
            const gettedRole = managerObj.getRole();

            // Assert
            expect(gettedRole).toBe(expectedValue);
        });
    });
});
