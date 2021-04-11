// ref https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
export const camelCaseToText = (text) => {
    var result = text.replace(/([A-Z])/g, " $1");
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}
