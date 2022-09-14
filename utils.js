
export const getHeaders = (headers) => {
    return {
        ...headers,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    }
}

export const buildResponse = (body, statusCode, headers) => {
    const headers = getHeaders(headers);
    return {
        statusCode,
        headers,
        isBase64Encoded: false,
        body: JSON.stringify(body)
    }
}