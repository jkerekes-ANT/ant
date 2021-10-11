export type WordoraWord = {
    word: string,
    frequency: number
}

export type WordoraGame = {
    pattern: string,
    words: Array<WordoraWord>
}