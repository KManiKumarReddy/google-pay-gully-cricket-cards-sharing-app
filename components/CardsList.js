import Image from "next/image"
import { useEffect, useState } from "react"

export default function CardsList() {
    const [cardsList, setCardsList] = useState([])
    useEffect(() => {
        fetch('/api/counts').then((res) => res.json()).then(setCardsList)
    }, [])


    return <div className="container p-5 gap-5 grid grid-cols-2">
        {cardsList.map(([name, count, imageUrl]) => <Card key={name} name={name} count={count} imageUrl={imageUrl} />)}
    </div>
}

function Card({ name, count, imageUrl }) {

    const [currentCount, setCurrentCount] = useState(count)

    const claimCard = async () => {
        const { url } = await fetch(`/api/claim`, { method: 'POST', body: name }).then((res) => res.json())
        setCurrentCount((prevCount) => prevCount - 1)
        window.location.href = url
    }
    return <div className={`container cursor-pointer rounded-lg  ${count == 0 ? 'grayscale' : ''}`} onClick={claimCard}>
        <div className="relative text-center">
            <Image
                className={`rounded-t-lg`}
                src={imageUrl}
                alt={name}
                width={744}
                height={420}
            />
            <span className="absolute top-0 right-0 px-2 py-1 -mr-2 -mt-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {currentCount}</span>
        </div>
    </div>
}