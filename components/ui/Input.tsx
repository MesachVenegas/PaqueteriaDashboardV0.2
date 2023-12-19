
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = (props: InputProps) => {
  return (
    <input
      className="w-full max-w-sm p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500 dark:text-gray-100 dark:bg-slate-700"
      {...props}
    />
  )
}
