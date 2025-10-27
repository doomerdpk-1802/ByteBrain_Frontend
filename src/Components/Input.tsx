import type { Ref } from "react";

interface GenericInputProps {
  label: string;
  placeholder: string;
  reference?: Ref<HTMLInputElement>;
}

export default function GenericInput(props: GenericInputProps) {
  return (
    <div className="flex w-full items-center justify-between mb-4 gap-2">
      <label className="mb-1 text-gray-700 font-medium">{props.label}</label>
      <input
        ref={props.reference}
        placeholder={props.placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
      />
    </div>
  );
}
