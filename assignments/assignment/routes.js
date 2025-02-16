const handlerRoutes = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body><h1>Welcome to the assignment</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Assignment</title></head>');
        res.write('<body><h1>Users</h1>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            res.writeHeader(
                302,
                {
                    'Location': '/users'
                }
            )
            return res.end();
        });
    }

}


exports.handler = handlerRoutes;