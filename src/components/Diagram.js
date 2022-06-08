import "./diagram.css";
import data from '../data.json';
import Bar from './Bar';

function Diagram() {
    const maxDay = data.reduce((a, b) => {
        return a.amount < b.amount ? b : a
    }, {amount: 0 });

    const today = (new Date()).getDay();
    
    return (
        <div className="diagram">
            <h1 className="diagram__title">Spending - Last 7 days</h1>
            <div className="diagram__detail">
                {data.map(({day, amount}, index) => (
                    <Bar key={day} day={day} amount={amount} maxDay={maxDay} today={ index === today - 1 ? true : false }/>
                ))}
            </div>
        </div>
    );
}

export default Diagram;
