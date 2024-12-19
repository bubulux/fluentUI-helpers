import { useEffect, useState } from "react";

export default function useFuiProviderNode() {
  const [node, setNode] = useState<Element | null>(null);
  useEffect(() => {
    const fuiNode = document.querySelector(".fui-FluentProvider");
    setNode(fuiNode);
  }, []);
  return { fuiProviderNode: node };
}
