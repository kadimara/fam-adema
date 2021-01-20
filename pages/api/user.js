// Bij de export default komt de fetch binnen.
// Op de req staat alle data
export default function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const test1 = JSON.parse(req.body);
    const test2 = test();
    res.end(JSON.stringify({ name: 'John Doe', test: test2 }));
}

// We kunnen hier binnen gewoon functies gaan gebruiken
function test() {
    return 'TEST';
}

// Client side nog default post en request functie maken met async zodat we hier op kunnen wachten?
