/// <reference path="../../typings/tsd.d.ts" />

const baseUrl = "http://clingykoala.com/crush";

const source = {
    isPrime: '/isPrime.php',
    updateValidation: '/updateValidation.php',
    register: '/register.php'
}


function getUrl(part: string): string {
    return baseUrl + part;
};


export {
source,
getUrl
}