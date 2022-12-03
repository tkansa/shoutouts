import { FormEvent, useState } from 'react';
import { ShoutOut } from './models/shoutOut';

interface Props {
    onSubmit: (shoutOut: ShoutOut) => void;
}



function ShoutOutForm({ onSubmit }: Props) {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent) {
        console.log("Inside post Form handle submit");
        event.preventDefault();
        const shoutOut: ShoutOut = { to: to, from: from, message: message };
        onSubmit(shoutOut);
        setTo("");
        setFrom("");
        setMessage("");

    }

    return (
        <div className="ShoutOutForm">

            <form onSubmit={handleSubmit}>
                <h2>Leave a Shout Out</h2>
                <label htmlFor="to">To</label>
                <input type="text" id="to" onChange={(e) => setTo(e.target.value)} />
                <label htmlFor="from">From</label>
                <input type="text" id="from" onChange={(e) => setFrom(e.target.value)} />
                <label htmlFor="message">Shout Out</label>
                <textarea id="message" onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Submit Shout Out!</button>
            </form>
        </div>
    );
}

export default ShoutOutForm;
