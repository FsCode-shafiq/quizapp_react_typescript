export type apiResult = [{
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answer: string[]
}]

export type categoryList = string[];