interface LoadingSpinnerProps {
  label?: string;
  size?: "sm" | "md";
}

export default function LoadingSpinner({ label, size = "sm" }: LoadingSpinnerProps) {
  const dimension = size === "sm" ? "h-4 w-4" : "h-8 w-8";

  return (
    <span className="inline-flex items-center gap-2" role="status" aria-live="polite">
      <span
        className={`${dimension} animate-spin rounded-full border-2 border-bone-100/30 border-t-ember-500`}
        aria-hidden="true"
      />
      {label && <span className="text-sm">{label}</span>}
      <span className="sr-only">Carregando</span>
    </span>
  );
}
