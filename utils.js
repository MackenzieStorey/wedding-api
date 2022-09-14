
export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    }
}

export const buildResponse = (body, statusCode) => {
    const headers = getHeaders();
    return {
        statusCode,
        headers,
        isBase64Encoded: false,
        body: JSON.stringify(body)
    }
}