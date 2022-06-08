import "./summary.css";

function Summary() {
    return (
        <div className="summary">
            <div className="summary__count">
                <div className="summary__title">Total this month</div>
                <div className="summary__number">$478.33</div>
            </div>
            <div className="summary__compare">
                <div className="summary__compare-number">+2.4%</div>
                <div className="summary__compare-descript">from last month</div>
            </div>
        </div>
    );
}

export default Summary;
