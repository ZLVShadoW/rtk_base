export type GroupType = {
    id: number
    title: string
}

export type ItemType = {
    id: number
    text: string
}

export type ItemsGroupType = {
    [key: string]: Array<ItemType>
}