import React from 'react'
import '../styles/Logistics.scss'
import { data } from '../data/logisticsData'

const LogisticsCard = ({data: {tab, title, content}}) => {
    return (
        <div className={'logistics-card'}>
            <h4 className={'blue-tab'}>{tab}</h4>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}


export default function Logistics() {
    const cards = data.map(d => <LogisticsCard data={d} />)
    return (
        <section id='logistics' className={'block_full-screen'}>
            {cards}
        </section>
    )
}
