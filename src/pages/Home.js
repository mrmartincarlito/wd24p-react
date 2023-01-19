import DashboardCard from "../component/DashboardCard";
import DashboardButton from "../component/DashboardButton";
import { useCallback, useEffect, useState } from "react";

function Home() {
    let [cardTitle1, setCardTitle1] = useState('');
    let [cardTitle2, setCardTitle2] = useState('');
    let [cardTitle3, setCardTitle3] = useState('');
    let [counter, setCounter] = useState(0);

    useEffect(() => {
        setCardTitle1("Card 1111");
        setCardTitle2("Card 2222");
        setCardTitle3("Card 3333");
    }, []);

    const handleButton1 = useCallback(() => {
        setCardTitle1("I am Card Title 1");

        setCounter(counter++);
    }, []);

    const handleButton2 = useCallback(() => {
        setCardTitle2("I am Card Title 2");

        setCounter(counter--);
    }, []);

    const handleButton3 = useCallback(() => {
        setCardTitle3("I am Card Title 3");
    }, []);

    return (
        <div>
            <div className="row p-3">
                <div className="col-4">
                    <DashboardCard cardTitle={cardTitle1} cardSubtitle='Subtitle 1' cardImage="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"/>
                    <DashboardButton name='Increment' customizedStyle='blue' onClick={handleButton1}/>
                    <h2>Counter {counter}</h2>
                </div>
                <div className="col-4">
                    <DashboardCard cardImageClass="" cardTitle={cardTitle2} cardSubtitle='Subtitle 2' cardImage="https://g1.img-dpreview.com/E1C512948E964E37B86FF5B4E61E8091.jpg"/>
                    <DashboardButton name='Decrement' customizedStyle='red' onClick={handleButton2}/>
                </div>
                <div className="col-4">
                    <DashboardCard cardTitle={cardTitle3} cardSubtitle='Subtitle 3' cardImage="https://g1.img-dpreview.com/EDEA4C028C2649D79B2EFDDC2BD7E047.jpg"/>
                    <DashboardButton name='Button 3' customizedStyle='green' onClick={handleButton3}/>
                </div>

            </div>
        </div>
    );
};

export default Home;