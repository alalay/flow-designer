import { useEffect } from "react";
import { useStoreActions } from "../store/hooks";
import { Elements } from "../types";

interface ElementUpdateProps {
  elements: Elements;
}

const ElementUpdater = ({ elements }: ElementUpdateProps) => {
  const setElements = useStoreActions((actions) => actions.setElements);
  useEffect(() => {
    setElements(elements);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

  return null;
};

export default ElementUpdater;
