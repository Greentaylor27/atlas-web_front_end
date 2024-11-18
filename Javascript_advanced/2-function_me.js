function welcomeMessage(fullName) {
    if (typeof fullName != 'string'){
        throw new Error('fullName must be a string');
    }
    return () => {
        alert('Welcome ' + fullName);
    }
}

const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred')
