import { type InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  error?: string;
}

export default function FormField({ icon, error, id, ...inputProps }: FormFieldProps) {
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <div className="w-full">
      <div
        className={`flex w-full items-center gap-3 rounded-full border bg-void-700 px-5 py-3 transition-colors ${
          error ? "border-ember-500" : "border-white/10 focus-within:border-gold-400/60"
        }`}
      >
        <span aria-hidden="true" className="shrink-0 text-bone-300">
          {icon}
        </span>
        <input
          id={id}
          className="w-full bg-transparent text-sm text-bone-100 outline-none placeholder:text-bone-300"
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          {...inputProps}
        />
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 pl-2 text-xs text-ember-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
