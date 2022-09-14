import dotenv from 'dotenv'
import { people } from "./models/index.js";

export const getPeople = async event => {
    try {
        const listOfPeople = await people.findAll();

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            body: JSON.stringify(listOfPeople)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            body: JSON.stringify(error)
        };
    }
}

export const getPersonByInviteCode = async event => {
    try {
        const inviteCode = event.pathParameters.id;
        const where = {
            inviteCode
        };
        const person = await people.findOne({
            where
        });
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            body: JSON.stringify(person)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            body: JSON.stringify(error)
        };
    }
}