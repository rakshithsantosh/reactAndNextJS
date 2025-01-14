import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttontype="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttontype="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttontype="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttontype="secondary">
        Remove all items
      </Button>
    </section>
  );
}
