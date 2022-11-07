import React from 'react';

const initial: Array<CardType> = [
    {id: 1, text: 'Card 1'},
    {id: 2, text: 'Card 2'},
    {id: 3, text: 'Card 3'},
    {id: 4, text: 'Card 4'},
]

type CardType = {
    id: number
    text: string
}

export const Second = () => {

    const [cards, setCards] = React.useState<Array<CardType>>(initial)
    const [currentCard, setCurrentCard] = React.useState<CardType | null>(null)

    const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>, card: CardType) => {
        setCurrentCard(card)
        e.currentTarget.style.background = '#ccc'
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>, card: CardType) => {
        e.preventDefault()
        e.currentTarget.style.removeProperty('background')

        let currentCardIdx = cards.findIndex(crd => crd.id === (currentCard && currentCard.id))
        let cardIdx = cards.findIndex(crd => crd.id === card.id)

        setCards((st) => {

            let newArr = [...st] as CardType[]

            // let temp = newArr[currentCardIdx]
            //
            // newArr[currentCardIdx] = newArr[cardIdx]
            // newArr[cardIdx] = temp

            [newArr[currentCardIdx], newArr[cardIdx]] = [newArr[cardIdx], newArr[currentCardIdx]]

            return newArr
        })
        // setCurrentCard(null)
    }

    const onDragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.background = '#333'
    }

    const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.removeProperty('background')
    }

    return (
        <>
            <h2>Second</h2>

            <div style={{display: 'flex', gap: 30}}>
                {cards.map(card => {
                    return (
                        <div key={card.id} draggable={true}
                             style={{
                                 padding: '50px 30px',
                                 border: '1px solid #ddd',
                                 cursor: 'grab',
                                 opacity: currentCard && currentCard.id === card.id ? '0.85' : '1'
                             }}

                             onDragStart={(e) => onDragStartHandler(e, card)}
                             onDragOver={onDragOverHandler}
                             onDrop={(e) => onDropHandler(e, card)}
                             onDragEnter={onDragEnterHandler}
                             onDragLeave={onDragLeaveHandler}

                             onDragEnd={() => {setCurrentCard(null)}}
                        >
                            {card.text}
                        </div>
                    )
                })}

            </div>
        </>
    );
};