
function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
        // return arrayElement.url.match(searchTerm);
        return arrayElement.url.match(regex);
    });
}

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
        const output2 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" }
        ];

        const output3 = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        expect(filterByTerm(input, "link")).toEqual(output);

        expect(filterByTerm(input, "LINK")).toEqual(output); // Test "LINK"

        expect(filterByTerm(input, "uRL")).toEqual(output2); // Test "uRL"
        // console.log(filterByTerm(input, ));
        expect(filterByTerm(input, "")).toEqual(output3); // Test empty string
    });
});