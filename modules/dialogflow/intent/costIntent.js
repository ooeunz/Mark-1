const costIntent = (responses) => {
    try {
        query = `얼마게~?`      
        return query;
    } catch (err) {
        console.log(`dialog err: ${err}`);
        res.send(`dialog err: ${err}`);
    }
}
module.exports = costIntent;
