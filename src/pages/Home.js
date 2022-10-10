import Header from "../components/Header";
import data from '../assets/json/data.json'
import '../assets/styles/card.css'
import Card from "../components/Card";

function Home() {
    console.log(data.length)

    return (
        <div>
            <Header />
            <main>
                // img
                <div className="card-container">
                    { data.map((id, index) => {
                        return (
                            <Card title={data[index].title} cover={data[index].cover} key={data[index].id}/>
                        )
                    })}
                </div>
            </main>
            // footer
        </div>
    );
}

export default Home;