import fs from "fs";
import csv from "fast-csv";

const dictionary = {
    "words": []
};

fs.createReadStream('data/unigram_freq.csv')
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    // We only want words size 2+
    .on('data', row => (row.word.length > 1) && dictionary.words.push(row.word))
    .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`)

        const jsonString = JSON.stringify(dictionary);
        fs.writeFile('data/data.json', jsonString, (error) => {
            if (error) {
                throw error;
            }
        });
    });

