export default function isValidEmail(email: string): boolean {
    const validEmail =  /\S+@\S+\.\S+/;
    return validEmail.test(email);
}

// export function isValidPassword(password: string): boolean {

// }