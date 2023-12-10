import { useState } from 'react';

function ListMy({ props, forParent }) {
  let { id, title, Messages } = props;
  const [childData, setChildData] = useState(id);

  function handleClick(data) {
    setChildData(id);
    forParent(id);
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
        {Messages}
      </div>
      <span className="badge rounded-pill">
        <button type="button" onClick={handleClick} className="btn-close" aria-label="Close" />
      </span>
    </li>
  );
}

export default ListMy;