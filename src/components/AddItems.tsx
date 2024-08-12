import { useState } from "react";

const AddItems = ({ propsItem }: { propsItem: string }) => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState<string>(propsItem || "");

  function addItem() {
    console.log(1);

    if (item) {
      setItems([...items, item]);
      setItem("");
    }
  }

  function removeTheItem(removedItem: string) {
    const filteredArray: string[] = items.filter((item: string) => item !== removedItem);
    setItems(filteredArray);
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <label htmlFor="item">
        Item
        <input
          type="text"
          placeholder="enter the name of item"
          id="itemInput"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          name="itemInput"
        />
      </label>
      <button onClick={addItem} disabled={!item}>
        Add item
      </button>
      <div data-testid="allItems">
        {items.map((element) => (
          <p key={element}>
            {element}{" "}
            <button
              data-testid="removeItem"
              onClick={() => removeTheItem(element)}
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AddItems;
