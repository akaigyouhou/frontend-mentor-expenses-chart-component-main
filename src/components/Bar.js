import { useState } from 'react';
import "./bar.css";

function Bar({ day, amount, maxDay, today }) {
    const [show, setShow] = useState(false);
    const showDetail = () => {
        setShow(true);
    }

    const coverDetail = () => {
        setShow(false);
    }

    // const changeDetail = () => {
    //     const value = !show;
    //     setShow(value);
    // }

    return (
        <>
            <div
                style={{height: amount / maxDay.amount * 100 + "%"}}
                className={"bar__column" + (today ? " bar__column_today" : "") + (show ? " bar__column_filter" : "")}
                onMouseOver={showDetail}
                onMouseLeave={coverDetail}
                // onClick={changeDetail}
            >
                <div className={"bar__detail" + (show ? " bar__detail_show" : "")}>${amount}</div>
            </div>
            <div className="bar__index">{day}</div>
        </>
    );
}

export default Bar;
