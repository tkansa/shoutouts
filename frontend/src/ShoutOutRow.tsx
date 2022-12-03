import { ShoutOut } from './models/shoutOut';
import './ShoutOutRow.css';

interface Props {
  shoutOut: ShoutOut;
}


function ShoutOutRow({ shoutOut }: Props) {
  

  return (
    <div className="ShoutOutRow">
      <h2>Shout out to {shoutOut.to}</h2>
      <p className='from'>- from {shoutOut.from}</p>
      <p>{shoutOut.message}</p>
    </div>
  );
}

export default ShoutOutRow;
