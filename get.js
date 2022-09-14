import { buildResponse } from "./utils.js";
import { people } from "./models/index.js";

/*
 *  Gets the full list of people invited to the wedding.
 */
export const getPeople = async event => {
    try {
        const listOfPeople = await people.findAll();
        return buildResponse(listOfPeople, 200);

    } catch (error) {
        // catch all error handling for now
        return buildResponse(error, 500);
    }
}

/*
 *  Get a single record from the person table.
 */
export const getPersonByInviteCode = async event => {
    try {
        const inviteCode = event.pathParameters.id;
        const where = {
            inviteCode
        };
        const person = await people.findOne({
            where
        });

        if (person) {
            return buildResponse(person, 200);
        } else {
            return buildResponse(null, 404);
        }
    } catch (error) {
        return buildResponse(error, 500);
    }
}