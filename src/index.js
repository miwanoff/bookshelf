import React from "react";
import ReactDOM from "react-dom/client";
import booksData from "./books.js";
import logo from "./logo.svg";
import BookItem from "./BookItem.jsx";
import CartItem from "./CartItem.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Hello() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello, world!</h1>;
      <h2>{booksData[0].name}</h2>
    </div>
  );
}

function Image(props) {
  return <img src={props.src} alt="logo" style={{ width: "150px" }} />;
}

function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Книжный магазин</h1>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: booksData,
      cart: [],
    };
  }

  addBookToCart = (book) => {
    //console.log(book);
    const goods = this.state.cart;
    goods.push(book);
    //console.log(goods);
    this.setState({
      cart: goods,
    });
  };

  deleteBookFromCart = (book) => {
    const goods = this.state.cart.filter((item) => item.id !== book.id);
    this.setState({
      cart: goods,
    });
  };

  removeBook = (book) => {
    const updateBooks = this.state.books.filter(function (item) {
      return item.id != book.id;
    });
    console.log(updateBooks);
    this.setState({
      books: updateBooks,
    });
  };

  render() {
    return (
      <div>
        <Header className="jumbotron alert alert-primary" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="row">
                {this.state.books.map((book) => {
                  // console.log(book.id);
                  return (
                    <div className="col-4 mb-4" key={book.id}>
                      <BookItem book={book}  removeBook={this.removeBook}  addBookToCart={this.addBookToCart} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-4">
              <h4>
                Корзина товаров, количество книг: {this.state.cart.length}{" "}
              </h4>
              <ul className="list-group">
                {this.state.cart.map((book) => (
                  <li key={book.id} className="list-group-item">
                    <div className="row">
                      <div className="col-4">{book.name}</div>
                      <div className="col-3">{book.author}</div>
                      <div className="col-2">{book.price}</div>
                      <div className="col-3">
                        <button
                          onClick={this.deleteBookFromCart.bind(this, book)}
                          type="button"
                          className="btn btn-outline-primary mt-auto mb-2"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
