export interface ListItemData {
    name: string;
    description: string;
}

export default function ListItem({ data, title }: { data: ListItemData[], title: string }) {
    return (
        <div className="mt-6">
        {title && <h2 className="text-2xl">{title}</h2>}
        <ul className="mt-4 list-disc list-inside space-y-1">
            {data.map( (item: ListItemData) => (
                <li key={item.name}>{item.name} {item.description}</li>
            ))}
        </ul>
        </div>
    )
}
