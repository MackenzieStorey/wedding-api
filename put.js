import 'dotenv/config' // TODO: figure out why I need to import this to have access to env vars. might have to live with it.
import { buildResponse } from './utils.js';
import { people } from "./models/index.js";

/*
 *  Updates a record in the person table.
 */
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

        return buildResponse(person, 200);
    } catch (error) {
        return buildResponse(err, 500);
    }
}