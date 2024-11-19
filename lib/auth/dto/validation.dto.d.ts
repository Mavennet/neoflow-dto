export declare abstract class ValidationDTO {
    readonly email?: string;
    readonly password?: string;
    readonly apiKey?: string;
    readonly context: 'https://metaltrail.com/metal-vocab/#';
    '@type': 'loginValidationAction';
}
