const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object with a 'name', 'id', and 'email' property when called with the 'new' keyword", () => {
            // Arrange
            const providedNameProp = "andrew";
            const providedIdProp = 1;
            const providedEmailProp = "andrew@gmail.com";

            // Act
            const employeeObj = new Employee(providedNameProp, providedIdProp, providedEmailProp);

            // Assert
            expect(employeeObj.name).toBe(providedNameProp);
            expect(employeeObj.id).toBe(providedIdProp);
            expect(employeeObj.email).toBe(providedEmailProp);
        });
    });

    describe("Get method", () => {
        it("should get employee's name when getName() called", () => {
            // Arrange
            const providedNameProp = "andrew";
            const providedIdProp = 1;
            const providedEmailProp = "andrew@gmail.com";
            const employeeObj = new Employee(providedNameProp, providedIdProp, providedEmailProp);

            // Act
            const gettedName = employeeObj.getName();

            // Assert
            expect(gettedName).toBe(providedNameProp);
        });

        it("should get employee's id when getId() called", () => {
            // Arrange
            const providedNameProp = "andrew";
            const providedIdProp = 1;
            const providedEmailProp = "andrew@gmail.com";
            const employeeObj = new Employee(providedNameProp, providedIdProp, providedEmailProp);

            // Act
            const gettedId = employeeObj.getId();

            // Assert
            expect(gettedId).toBe(providedIdProp);
        });

        it("should get employee's email when getEmail() called", () => {
            // Arrange
            const providedNameProp = "andrew";
            const providedIdProp = 1;
            const providedEmailProp = "andrew@gmail.com";
            const employeeObj = new Employee(providedNameProp, providedIdProp, providedEmailProp);

            // Act
            const gettedEmail = employeeObj.getEmail();

            // Assert
            expect(gettedEmail).toBe(providedEmailProp);
        });

        it("should get the value 'Employee' when getRole() called", () => {
            // Arrange
            const expectedValue = 'Employee';
            const employeeObj = new Employee();
            
            // Act
            const gettedRole = employeeObj.getRole();

            // Assert
            expect(gettedRole).toBe(expectedValue);
        });
    });
});
