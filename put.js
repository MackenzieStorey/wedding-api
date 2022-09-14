import 'dotenv/config'
import { people } from "./models/index.js";

export const updateRsvp = async event => {
    try {
        const { isComing, countComing, dietaryRestrictions, songRequests } = JSON.parse(event.body);
        const where =  {
            inviteCode: event.pathParameters.id
        };

        let person = await people.findOne({
            where
        });

        person.set({
            isComing,
            countComing,
            dietaryRestrictions,
            songRequests
        });

        await person.save();

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
    } catch (err) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            isBase64Encoded: false,
            body: JSON.stringify(err)
        };
    }
}