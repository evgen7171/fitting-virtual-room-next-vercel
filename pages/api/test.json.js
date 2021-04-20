import fs from 'fs';

export default (req, res) => {
    let fileContent = fs.readFileSync('resources/test.json', "utf8");
    res.status(200).json(fileContent)
}
