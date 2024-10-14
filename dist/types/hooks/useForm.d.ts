export type ValidatorFunction<T> = (values: T) => Record<keyof T, string | undefined>;
export interface UseFormReturnType<T> {
    values: T;
    errors: Record<keyof T, string | undefined>;
    touched: Record<keyof T, boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, callback: (values: T) => Promise<void>) => void;
    resetForm: () => void;
    isSubmitting: boolean;
    submissionStatus: "idle" | "success" | "error";
}
/**
 * `useForm` is a hook for managing form state and validation in React.
 * It provides an API for handling form inputs, validation, submissions, and form reset functionality.
 *
 * @param initialValues - An object containing the initial values of the form fields.
 * @param validate - A function to validate form values. Should return an object with error messages.
 * @return - An object containing form values, errors, handlers for changes, blurs, submission, form reset, submission status, and whether the form is submitting.
 */
export declare function useForm<T extends Record<string, any>>(initialValues: T, validate?: ValidatorFunction<T>): UseFormReturnType<T>;
