export interface User {
    email: string,
    password: string,
    confirmPassword: string,
    person: {
        name: string,
        surname: string
    }
}
