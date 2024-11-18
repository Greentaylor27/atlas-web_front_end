function welcome (firstName, lastName) {
    if (typeof firstName != 'string') {
        throw new Error('First name must be of a valid string');
    }
    if (typeof lastName != 'string') {
        throw new Error('Last name must be of a valid string');
    }

    let fullName = firstName.concat(" " + lastName);
    function displayFullName (fullName) {
        alert("Welcome " + fullName + "!");
    }
    displayFullName (fullName);
}
