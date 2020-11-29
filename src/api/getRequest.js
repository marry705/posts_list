import { CONST } from '../constants/constants';
import { randomInteger } from '../redux/actions';

export async function getRequest(request) {
    const response = await fetch(`${CONST.SERVER_HOST}/${request.theme}/hot.json`);
    let posts = await response.json();
    let len = await posts.data.children.length
    return await posts.data.children[randomInteger(len)].data;
}