import { useState } from 'react';

const Bookshelf= () => {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [formdata, setFormdata] = useState({
    title:'',
    author:''
  });

  const handleChange = (event)=>{
    setFormdata({...formdata, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    setBooks([...books, formdata])
    setFormdata({
      title: '',
      author: ''
    })
  }

  return(
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input id="title" name="title" value={formdata.title} onChange={handleChange}/>

          <br />

          <label htmlFor="author">author</label>
          <input id="author" name="author" value={formdata.author} onChange={handleChange}/>

          <br />
          
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book)=>(
          <div className='bookCard' key={book.title}>
            <p>{book.author}'s: {book.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookshelf
