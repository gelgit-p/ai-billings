// import axios from 'axios'
// import 

import { getRequest } from "../libs/http"

export const tokenprofiles = async() => {
    const url = 'https://api.dexscreener.com/token-profiles/latest/v1'
    const profile = await getRequest(url)

    return profile;

}