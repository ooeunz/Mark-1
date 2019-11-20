const greeting = (responses) => {
    // const sessionId = req.body.sessionId // 임시
    try {
        query = `check response`      
        return query;
    } catch (err) {
        console.log(`dialog err: ${err}`);
        res.send(`dialog err: ${err}`);
    }
}
module.exports = greeting;
