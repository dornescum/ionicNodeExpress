/**
 * Represents a class that contains error messages.
 * @interface
 */
export interface ErrorMessages {
    successRegister: string;
    successLogin: string;
    successResponse: string;
    success: string;
    successCalculator: string;
    removeUser: string;
    error: string;
    errorRemoveUser: string;
    databaseError: string;
    userNotFound: string;
    forbidden: string;
    emailInUse: string;
    emailNotRegistered: string;
    serverError: string;
    errorCalculatorServer: string;
    invalidCompanyId: string;
    wrongCredentials: string;
    nothingFound: string;
    successRemoveUser: string;
    userNotFoundError: string;
    transactionStartFailed: string;
    linkHashFailed: string;
    transactionCommitFailed: string;
    userUpdatedSuccessfully: string;
    errorQueryingTheDatabase: string
}

/**
 * Represents a collection of status messages.
 * @typedef {object} ErrorMessages
 * @property {string} successRegister - Message for successful registration.
 * @property {string} successLogin - Message for successful login.
 * @property {string} successResponse - Success response message.
 * @property {string} success - Message for finding the secret message.
 * @property {string} successCalculator - Message for successful calculator operation.
 * @property {string} removeUser - Message for successful user removal.
 * @property {string} error - Generic error message.
 * @property {string} errorRemoveUser - Error message for user removal.
 * @property {string} databaseError - Error message for database issues.
 * @property {string} userNotFound - Error message for user not found.
 * @property {string} forbidden - Access forbidden message.
 * @property {string} emailInUse - Error message for email address already in use.
 * @property {string} emailNotRegistered - Error message for email address not registered.
 * @property {string} serverError - Error message for server issues.
 * @property {string} errorCalculatorServer - Error message for calculator server error.
 * @property {string} invalidCompanyId - Error message for invalid company ID.
 * @property {string} wrongCredentials - Error message for wrong credentials.
 * @property {string} nothingFound - Message for not finding anything.
 */
export const statusMessages: ErrorMessages = {
    successRegister: "You have successfully registered.",
    successLogin: "You have successfully logged in.",
    successResponse: "200 OK",
    success: "You have found the secret message.",
    successCalculator: "Calcul pret introdus.",
    removeUser: "You have successfully removed user.",
    error: "Something went wrong, please try again",
    errorRemoveUser: "Error removing user",
    databaseError: "Database error",
    userNotFound: "User not found",
    forbidden: "NO ACCESS",
    emailInUse: "Email address is in use, please try a different one",
    emailNotRegistered: "Email address is not registered",
    serverError: "Server error",
    errorCalculatorServer: "Server error calculator",
    invalidCompanyId: "Invalid company ID",
    wrongCredentials: "Wrong credentials, please try again",
    nothingFound: "Nu am gasit nimic",
    successRemoveUser: "User removed successfully",
    userNotFoundError: "User not found",
    transactionStartFailed: "Transaction start failed",
    linkHashFailed: "Link hash failed",
    transactionCommitFailed: "Transaction commit failed",
    userUpdatedSuccessfully: "User updated successfully",
    errorQueryingTheDatabase: "Error querying the database"
};