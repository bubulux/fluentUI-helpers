/* eslint-disable react/button-has-type */
import { useModalContext } from "@preview/elevated-modal";
import ExampleModal from "@preview/elevated-modal/example/example";

export default function App() {
  const { setIsActivated, setModal } = useModalContext();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <button
        onClick={() => {
          setIsActivated(true);
          setModal(
            <ExampleModal
              someNumber={1}
              someString="Hello, world!"
              someObject={{ someKey: "value" }}
              onAbort={() => {
                setIsActivated(false);
                setModal(null);
              }}
            />,
          );
        }}
      >
        Open Modal
      </button>
    </div>
  );
}
