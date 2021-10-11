import { useEffect } from "react";

const ElementUpdater = ({ elements }: any) => {
    const setElements = useStoreActions(actions => actions.setElements);
  useEffect(() => {
    setElements(elements);
  }, [elements]);

  return null;
};

export default ElementUpdater;
