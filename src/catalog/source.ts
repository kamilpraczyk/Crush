const baseUrl = "http://clingykoala.com/crush";

const source = {
    isPrime: '/isPrime.php',
    updateValidation: '/updateValidation.php',
    register: '/register.php',
    updateLastLogin: '/updateLastLogin.php',
    emailGreeting: '/emailGreeting.php',
    updateStatus: '/updateStatus.php',
    readStatus: '/readStatus.php',
    notify: '/notify.php',
    cancelPage: '/cancel.html',
    successPage: '/success.html'
}

function getUrl(part: string): string {
    return baseUrl + part;
};

export {
source,
getUrl
}