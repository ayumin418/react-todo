const style = {
  width: "400px",
  height: "30px",
  margin: "8px",
  padding: "8px",
  backgroundColor: "#c1ffff",
  borderRadius: "5px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
