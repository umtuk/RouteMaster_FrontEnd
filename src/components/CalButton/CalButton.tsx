import { Link } from 'react-router-dom';

function CalButton(): JSX.Element {
  return (
    <div>
      <Link to="/calculate/123/jin">
        <button type="submit">정산하기</button>
      </Link>
    </div>
  );
}

export default CalButton;
