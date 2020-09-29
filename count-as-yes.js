export function countsAsYes(reply) {
    if (reply.charAt(0).toUpperCase() === 'Y') {
/*console*/console.log('they said yes!');
        return true;
    } else {
/*console*/console.log('they said no');
        return false;
    }
}
