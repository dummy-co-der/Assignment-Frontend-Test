import classNames from "./classNames";
const FormContainer = ({
  className = "gap-4 md:gap-8",
  onSubmit = (event) => event.preventDefault(),
  ...otherProps
}) => (
  <form
    className={classNames(
      "flex-1 w-full flex flex-col justify-start mx-auto",
      className
    )}
    onSubmit={onSubmit}
    {...otherProps}
  />
);

export default FormContainer;
