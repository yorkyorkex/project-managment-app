interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
  className?: string;
}

const ErrorMessage = ({ message, onDismiss, className = '' }: ErrorMessageProps) => {
  return (
    <div className={`error-message ${className}`.trim()}>
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <span className="error-text">{message}</span>
        {onDismiss && (
          <button className="error-dismiss" onClick={onDismiss}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;