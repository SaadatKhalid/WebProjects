// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(pass) {
    const hasUppercase = /[A-Z]/.test(pass);
    const hasLowercase = /[a-z]/.test(pass);
    const hasDigit = /[0-9]/.test(pass);
    const isLongEnough = pass.length >= 8;

    if (isLongEnough && hasUppercase && hasLowercase && hasDigit) {
        console.log("✅ Password is valid!");
    } else {
        console.log("❌ Password is invalid. Please make sure it has:");
        if (!isLongEnough) console.log("- At least 8 characters");
        if (!hasUppercase) console.log("- At least one uppercase letter");
        if (!hasLowercase) console.log("- At least one lowercase letter");
        if (!hasDigit) console.log("- At least one digit");
    }
}

passwordValidator("incorrectPassword123")