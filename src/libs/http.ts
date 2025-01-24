//forked from https://github.com/crypto-stats/sdk/blob/master/src/libs/HTTP.ts by [dmihal David Mihal]

import 'isomorphic-fetch';
declare const fetch: any;

// export class HTTP {

export const getRequest = async (url: string, options?: any) => {
//   async get(url: string, options?: any) {
    const request = await fetch(url, options);

    if (request.status !== 200) {
      // console.error(`Request to ${url} returned an error`, request?.json());
      return;
    }

    const response = await (options?.plainText
      ? request.text()
      : request.json());
    return response;
  }
// }

//   async post(url: string, body: any, options?: any) {
    export const postRequest = async (url: string, body: any, options?: any) => {
    const request = await fetch(url, {
      ...options,
      headers: {
        'content-type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
    // // console.log(request.body);

    if (request.status !== 200) {
      throw new Error(
        `Request to ${url} returned an error (${request.status})`,
      );
    }

    const response = await (options?.plainText
      ? request.text()
      : request.json());

    return response;
  }
// }