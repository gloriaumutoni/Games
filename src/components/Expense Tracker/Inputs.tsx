export default function Inputs() {
  return (
    <div>
      <form>
        <input placeholder="Description" />
        <input placeholder="Amount" />
        <select>
          <option>Grocies</option>
          <option>Utility</option>
          <option>Entertainment</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}
