// MyOl.js
import ListMy from './li';

function MyOl({ propsElem, forParents }) {

    const {data} = propsElem

  function handleClick(data) {
    forParents(data);
  }

  return (
    <ol className="list-group list-group-numbered mt-3">
      {data.map((element, index) => (
        <ListMy
          key={index}
          forParent={handleClick}
          props={{
            id: element.id,
            title: element.title,
            Messages: element.Messages
          }}
        />
      ))}
    </ol>
  );
}

export default MyOl;
