export type ButtonProps = {
    variant?: "primary" | 'secondary'
    label?: string
}

export const Button:React.FC<ButtonProps> = ({label, variant, children}) => {
    
   return  <button style={{backgroundColor: variant==="primary"? 'red': 'green', color: 'white'}}>{label || children}</button>
}
