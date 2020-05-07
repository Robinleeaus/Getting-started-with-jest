describe("Filter function", () => {
    // test stuff
    test("it should filter by a search term (link)", () => {
        // actual test
        // define a simple input, an array of objects
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        // define the expected result
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});