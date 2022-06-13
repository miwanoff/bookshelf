const CartItem = props => {
    return (
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

    );
  };
  export default CartItem;