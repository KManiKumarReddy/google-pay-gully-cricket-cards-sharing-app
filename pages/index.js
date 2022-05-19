import CardsList from "../components/CardsList"

function HomePage() {
    return <div className="container px-5 text-center mx-auto">
        <CardsList />
        <a href="https://gpay.app.goo.gl/ZyUD33">
            <button className="rounded-lg bg-blue-500 text-white text-center p-1">
                <p className="text-lg">Please send your extra cards by clicking here</p>
                <p className="text-sm">You will receive new cards when someone claims your card</p>
            </button>
        </a>
    </div >
}

export default HomePage

