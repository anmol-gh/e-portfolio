const Test = (props) => {
  const information = props.data;
  const output = information.map((info) => {
    <div>
      <h1 className="name">
        {info.Name}
        <div className="age">{info.age}</div>
      </h1>
    </div>;
  });
  console.log(output);
  console.log("output");
  return { output };
};

export default Test;

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );
