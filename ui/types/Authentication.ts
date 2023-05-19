export interface IAuthentication {
    signedIn: boolean,
    user: null | {
        photo: string,
        email: string,
        username: string,
        name: string
    }
}