var RemoteNgrxDevtools = require("nativescript-remote-ngrx-devtools").RemoteNgrxDevtools;
var remoteNgrxDevtools = new RemoteNgrxDevtools();

describe("greet function", function() {
    it("exists", function() {
        expect(remoteNgrxDevtools.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(remoteNgrxDevtools.greet()).toEqual("Hello, NS");
    });
});