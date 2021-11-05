import { WordoraWord } from '@ant/api-interfaces';
import * as fs from 'fs';
import * as path from 'path';

const enDictionaryData = new Map<string, Array<WordoraWord>>();
const patterns = new Set<string>();
fs.readFile(
  path.resolve(__dirname, 'assets/unigram_freq.csv'),
  'utf8',
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const parsedCsv = [...data.toString().split('\n')].slice(1);

    for (const line of parsedCsv) {
      const [word, frequency] = line.split(',');
      if (word.length >= 2) {
        const key = word.slice(0, 1);
        const words = enDictionaryData.get(key) || [];
        enDictionaryData.set(key, [
          ...words,
          { word, frequency: parseInt(frequency) },
        ]);
        if (word.length >= 3) {
          patterns.add(word.slice(0, 3));
        }
      }
    }
    console.info('dictionary parse done');
  }
);

export const newWordoraGame = (req, res) => {
  // console.log('responding')
  const rndInt = Math.floor(Math.random() * patterns.size);
  const pattern = [...patterns.values()][rndInt];
  res.status(200).json({
    pattern,
    words: enDictionaryData.get(pattern[0]) || [],
  });
};
