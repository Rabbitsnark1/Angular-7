export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; 1 < totalPages; 1++) {
        result.push(i + 1)
    }
    return result;
}