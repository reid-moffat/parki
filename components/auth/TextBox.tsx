import React from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    error?: string;
    children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
    ({className, children, labelText, type = "text", error, ...props}, ref) => {
        return (
            <div className={className + " relative"}>
                {labelText && (
                    <label
                        className="block text-gray-600  mb-2 text-xs lg:text-sm xl:text-base"
                        htmlFor="txt"
                    >
                        {labelText}
                    </label>
                )}
                <div className="flex items-stretch">
                    <input
                        id="txt"
                        autoComplete="off"
                        className={`border-none rounded-2xl disabled:border-slate-100 w-full block outline-none py-3 px-1 transition-all text-xs lg:text-sm xl:text-base  bg-[#4472CA] bg-opacity-20
              ${error && "border-red-500 border  animate-shake"} ${
                            children ? "rounded-r-md" : "rounded-md"
                        }`}
                        {...props}
                        ref={ref}
                        type={type}
                    ></input>

                    <div className="flex">{children}</div>
                </div>
                {error && (
                    <p className="text-red-600 text-right animate-shake">{error}</p>
                )}
            </div>
        );
    }
);

TextBox.displayName = "TextBox";

export default TextBox;
