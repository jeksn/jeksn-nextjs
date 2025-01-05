export interface ListItemData {
    name: string;
    description: string;
}

export default function ListItem({ data, title }: { data: ListItemData[], title: string }) {
    return (
        <div className="mt-6 px-8 w-full md:max-w-screen-sm">
        {title && <h2 className="text-2xl">{title}</h2>}
        <ul className="mt-4 space-y-3 ml-3">
            {data.map( (item: ListItemData) => (
                <li className="list-disc" key={item.name}>
                    <p>{item.name}</p>
                    <span className="text-sm text-white/80">{item.description}</span>
                </li>
            ))}
        </ul>
        </div>
    )
}
