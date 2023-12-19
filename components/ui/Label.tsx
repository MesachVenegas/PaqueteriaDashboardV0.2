interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = ({ children, ...props }: LabelProps) => {
  return (
    <label className="flex justify-between items-center gap-2" {...props}>
      { children }
    </label>
  )
}
