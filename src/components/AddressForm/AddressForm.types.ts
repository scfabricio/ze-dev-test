import { FormEvent } from "react";

export interface IAddressFormProps {
    onSubmit: (event: FormEvent, value: string) => void;
}
