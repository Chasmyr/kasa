import Header from "../components/Header";
import data from '../assets/json/data.json'
import '../assets/styles/home.css'
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <>
            <Header />
            <main>
                <div className="img-home">
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
                <div className="card-container">
                    { data.map((id, index) => {
                        return (
                            <Card
                                title={data[index].title}
                                cover={data[index].cover}
                                key={data[index].id}
                                idUrl={data[index].id}
                            />
                        )
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;