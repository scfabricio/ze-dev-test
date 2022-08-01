import { FormEvent, MouseEvent } from "react";

export interface IAddressFormProps {
    onSubmit: (event: FormEvent, value: string) => void;
    onGetLocation: (event: MouseEvent) => void;
}
