const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        // define a simple input, an array of objects
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        // define the expected result
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output); // Test "LINK"
    });

    test("it should filter by a search term (uRL)", () => {
        // define a simple input, an array of objects
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        // define the expected result
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ];

        expect(filterByTerm(input, "uRL")).toEqual(output); // Test "uRL"
    });

    test("it should throw when searchTerm is empty string", () => {
        // define a simple input, an array of objects
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        // expect(() => {
        //     filterByTerm(input, "")
        // }).toThrowError(Error("searchTerm cannot be empty")); // Test empty string

        expect(
            filterByTerm(input, "")
        ).toThrowError(Error("searchTerm cannot be empty")); // Test empty string
    });

    test("it should throw when inputArr is empty array", () => {
        // define a empty input array
        const input = [];

        expect(() => {
            filterByTerm(input, "link")
        }).toThrowError(Error("inputArr cannot be empty")); // Test empty input array
    });
});