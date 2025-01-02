/* eslint-disable react/button-has-type */
type TProps = {
  someString: string;
  someNumber: number;
  someObject: {
    someKey: string;
  };
  onAbort: () => void;
};

export default function ExampleModal({
  someString,
  someNumber,
  someObject,
  onAbort,
}: TProps) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ backgroundColor: "white", padding: "1rem" }}>
        <h3>Modal Header with {someString}</h3>
        <p>
          Modal Content this number: {someNumber} and this key{" "}
          {someObject.someKey}
        </p>
        <button onClick={onAbort}>Close Modal</button>
      </div>
    </div>
  );
}
