
const AddBook = () => {
  return (
    <form class="add-book-info" id="my-form" action="">
    <label for="title"></label>
      <input
        className="ring-2 ring-cyan-600 ring-inset focus:ring-cyan-300"
      type="text"
      id="title"
      name="form-info"
      required
      placeholder="  Title..."
    />
    <label for="author"></label>
      <input
        className="ring-2 ring-cyan-600 ring-inset focus:ring-cyan-300"
      type="text"
      id="author"
      name="form-info"
      placeholder="  Author..."
    />
    <label for="pages"></label>
      <input
        className="ring-2 ring-cyan-600 ring-inset focus:ring-cyan-300"
      type="number"
      id="pages"
      name="form-info"
      placeholder="  Page count..."
    />


    <button type="submit" id="submit">Add Book</button>
  </form>
  )
}

export default AddBook