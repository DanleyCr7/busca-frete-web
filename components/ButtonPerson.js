export function ButtonPerson({ text, btn, onClick }) {
    const buttonSmall = "text-gray-600 w-full lg:w-1/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-3"
    const buttonLarge = "text-gray-600 w-full lg:w-6/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-2"
    return (
        <button onClick={onClick} className ={btn ? buttonSmall : buttonLarge} >
            {text}
        </button >
    );
}