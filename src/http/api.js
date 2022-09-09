import {$host} from "./axios";

export const createReview = async (number, name) => {
    const data = $host.post('api/review/create', {number, name}, {headers: {authorization: 'ADMIN1235'}})
    return {data}
}