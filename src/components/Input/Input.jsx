import React from "react";

const Input = React.forwardRef((props, ref) => {
    const { classNames } = props;

    return <input
        {...props}
        ref={ref}
        type={props?.type || 'text'}
        className={`p-3 w-full border-b border-b-[#b3b3b3] placeholder:text-[#b3b3b3] ${classNames}`}
    />;
});

export default Input