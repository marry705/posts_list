import {CONST} from '../constants/constants';

export async function getRequest(request) {
    const response = await fetch(`${CONST.SERVER_HOST}/${request.theme}.json`)
    return await response.json();
}