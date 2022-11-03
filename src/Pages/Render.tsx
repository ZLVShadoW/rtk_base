import React, {useState} from 'react';
import {Rend1} from '../renderFunc/rend1';
import {Rend2} from '../renderFunc/rend2';

const Comp: {
    [key: string]: ({
        num,
        setNum
    }: { num: number, setNum: React.Dispatch<React.SetStateAction<number>> }) => JSX.Element
} = {
    one: ({
        num,
        setNum
    }: { num: number, setNum: React.Dispatch<React.SetStateAction<number>> }) => <Rend1
        num={num} setNum={setNum}/>,
    two: ({
        num,
        setNum
    }: { num: number, setNum: React.Dispatch<React.SetStateAction<number>> }) => <Rend2
        num={num} setNum={setNum}/>
}

const renderComponent = (
    variant: string,
    {num, setNum}: { num: number, setNum: React.Dispatch<React.SetStateAction<number>> }
) => {
    return Comp[variant]({num, setNum})
}

export const Render = () => {
    const [num, setNum] = useState<number>(5)
    const [variant, setVariant] = useState<'one' | 'two'>('one')

    const onClickChange = () => {
        setNum(prevState => prevState + 1)
        setVariant(prevState => prevState === 'one' ? 'two' : 'one')
    }

    return (
        <>
            <div>
                {renderComponent(variant, {num, setNum})}
            </div>
            <div style={{margin: '15px 0', padding: 10, border: '1px solid #eee'}}>
                <div style={{marginBottom: 10}}>
                    Отрисовать тот или иной компонент (1 или 2) с прибавлением единицы к счётчику. <br/>
                    Что-то вроде "Таблицы"
                </div>
                Render <button
                onClick={onClickChange}>{variant === 'one' ? 'second' : 'first'} </button> Component
            </div>
        </>
    );
};
