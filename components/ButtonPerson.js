export function ButtonPerson({ text, btn, onChange }) {
    const buttonSmall = "flex flex-col items-center cursor-pointer text-gray-600 w-full lg:w-1/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-3"
    const buttonLarge = "flex flex-col items-center text-gray-600 w-full lg:w-6/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-2"
    return (
        <a onClick={onChange} className ={btn ? buttonSmall : buttonLarge} >
            {text}
        </a >
    );
}