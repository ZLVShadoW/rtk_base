import React from 'react';

import styles from './Third.module.css';
import {GroupType, ItemsGroupType} from './types';


const initGroups: Array<GroupType> = [
    {id: 1, title: 'Group 1'},
    {id: 2, title: 'Group 2'},
]

const initItemsGroup: ItemsGroupType = {
    '1': [{id: 1, text: 'Text 1'}, {id: 2, text: 'Text 2'}, {id: 3, text: 'Text 3'}],
    '2': [{id: 1, text: 'Text 1'}, {id: 2, text: 'Text 2'}, {id: 3, text: 'Text 3'}]
}

export const Third = () => {

    const [groups, setGroups] = React.useState<Array<GroupType>>(initGroups)
    const [items, setItems] = React.useState<ItemsGroupType>(initItemsGroup)

    return (
        <div className={styles.groups}>

            {groups.map(group => {
                return (
                    <div key={group.id} className={styles.group}>
                        <h3>{group.title}</h3>

                        {items[group.id].map(item => {
                            return (
                                <div key={item.id} className={styles.item}>
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