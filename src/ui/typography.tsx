type TextProps = React.HTMLProps<HTMLDivElement>;



export const Text: React.FC<TextProps> = ({ className ,children, ...props }) => {
    const FullClassName = className + " "
  return <div className={FullClassName} {...props}>{children}</div>;
};