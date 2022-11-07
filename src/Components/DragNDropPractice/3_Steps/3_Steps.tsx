import React from 'react';

import styles from './Third.module.css';
import {GroupType, ItemsGroupType, ItemType} from './types';


const initGroups: Array<GroupType> = [
    {id: 1, title: 'Group 1'},
    {id: 2, title: 'Group 2'},
    {id: 3, title: 'Group 3'},
]

const initItemsGroup: ItemsGroupType = {
    '1': [{id: 1, text: 'Text 1'}, {id: 2, text: 'Text 2'}, {id: 3, text: 'Text 3'}],
    '2': [{id: 11, text: 'Text 11'}, {id: 22, text: 'Text 22'}],
    '3': [{id: 13, text: 'Text 13'}]
}

export const Third = () => {

    const [groups, setGroups] = React.useState<Array<GroupType>>(initGroups)
    const [items, setItems] = React.useState<ItemsGroupType>(initItemsGroup)

    const [currentGroup, setCurrentGroup] = React.useState<GroupType | null>(null)
    const [currentItem, setCurrentItem] = React.useState<ItemType | null>(null)

    const onDragStartHandler = (
        e: React.DragEvent<HTMLDivElement>,
        params: { group: GroupType, item: ItemType }
    ) => {
        // вместо логики в JSX -е
        // e.currentTarget.classList.add(`${styles.current}`)

        setCurrentGroup(params.group)
        setCurrentItem(params.item)
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>, params: { group: GroupType, item: ItemType }) => {
        e.preventDefault()

        setItems(prevState => {
            let newItemsGroup: ItemsGroupType = JSON.parse(JSON.stringify(prevState))

            const crtItemIdx = newItemsGroup[currentGroup!.id].findIndex(item => item.id === currentItem!.id)
            const itIdx = newItemsGroup[params.group.id].findIndex(item => item.id === params.item.id)

            newItemsGroup[currentGroup!.id].splice(crtItemIdx, 1)
            newItemsGroup[params.group.id].splice(itIdx, 0, currentItem!)

            return newItemsGroup
        })

        setCurrentItem(null)
        setCurrentGroup(null)
    }

    return (
        <div className={styles.groups}>

            {groups.map(group => {
                return (
                    <div key={group.id} className={styles.group}>
                        <h3 className={styles.h3}>{group.title}</h3>

                        {items[group.id].map(item => {
                            return (
                                <div key={item.id}
                                     // className={styles.item}
                                     className={(currentItem && currentItem.id === item.id) && (currentGroup && currentGroup.id === group.id) ? `${styles.item} ${styles.current}` : styles.item}
                                     draggable={true}
                                     onDragStart={(e) => onDragStartHandler(e, {
                                         group,
                                         item
                                     })}
                                     onDragOver={onDragOverHandler}
                                     onDrop={(e) => onDropHandler(e, {group, item})}
                                >
                                    {item.text}
                                </div>
                            )
                        })}
                    </div>
                )
            })}

        </div>
    );
};