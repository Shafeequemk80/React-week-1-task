import PropTypes from "prop-types";
function List(props) {
  const itemList = props.item;
  const category = props.category;

  const listItems = itemList.map((fruits) => (
    <li key={fruits.id}>
      {fruits.name}: &nbsp;
      <b>{fruits.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listItems}</ol>
    </>
  );
}
List.propTypes = {
  category: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "category",
  item: [],
};

export default List;
