import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ className, label, ...props }) => {
  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md resize-none outline-none  ${className}`}
      />
    </div>
  );
};

export default TextArea;
