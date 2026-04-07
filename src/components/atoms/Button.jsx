export default function Button (props) {
    return (
        <button className={`bg-${props.bg} text-white p-2 rounded-lg font-semibold w-${props.width} m-auto`}>
            {props.content}
        </button>
    )
}