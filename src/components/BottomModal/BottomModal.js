import React from 'react';
import './BottomModal.scss';

class BottomModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isRequired: false,
      isSelected: false,
      selectedItems: [],
    };
  }

  handleToggleClick = name => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  clickItems = e => {
    const { isSelected, isRequired, selectedItems } = this.state;
    const {
      target: {
        dataset: { name, price },
      },
    } = e;

    if (isRequired || isSelected) {
      this.setState({ isRequired: false, isSelected: false });
    }

    const selectedItemObj = {
      id: selectedItems.length,
      name,
      price: parseInt(price),
      quantity: 1,
    };
    const newSelectedItems = selectedItems.concat(selectedItemObj);
    this.setState({ selectedItems: newSelectedItems });
  };

  calculateQuantity = () => {
    const { selectedItems } = this.state;
    const totalCount = selectedItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    return totalCount;
  };

  calculateMoney = () => {
    const { selectedItems } = this.state;
    const totalMoney = selectedItems.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    return totalMoney;
  };

  countQuantity = (idx, kind) => {
    const { selectedItems } = this.state;
    const sign = kind === 'plus' ? +1 : -1;
    const newSelectedItems = selectedItems.map(value => {
      return value.id === idx
        ? {
            ...value,
            quantity: value.quantity + sign,
          }
        : { ...value };
    });
    this.setState({ selectedItems: newSelectedItems });
  };

  render() {
    const { isRequired, isSelected, selectedItems } = this.state;
    const { requireOption, selectOption, toggleModal } = this.props;

    return (
      <div className="outer">
        <div className="overlay" onClick={toggleModal}></div>
        <section className="BottomModal">
          <section className="modal-header">
            <p></p>
            <p className="header-title">????????????</p>
            <button className="close-button">
              <img alt="close" src="/icon/Close.svg" onClick={toggleModal} />
            </button>
          </section>
          <section className="modal-option">
            <section className="required-option">
              <p className="title">????????????</p>
              <button
                className="trigger"
                onClick={() => this.handleToggleClick('isRequired')}
              >
                <span name="isRequired">[??????] ????????? ??????????????????</span>
                <img
                  alt="append"
                  src="/icon/UnderArrow.svg"
                  name="isRequired"
                />
              </button>
              {isRequired && (
                <ul className="required-option-list selected">
                  {requireOption.map(value => {
                    return (
                      <li
                        key={value.id}
                        className="trigger"
                        data-price={value.price}
                        data-name={value.name}
                        onClick={this.clickItems}
                      >
                        {value.name} (
                        {parseInt(value.price.slice(0, -3)).toLocaleString()}
                        ???)
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
            <section className="selected-option">
              <p className="title">????????????</p>
              <button
                className="trigger"
                name="isSelected"
                onClick={() => this.handleToggleClick('isSelected')}
              >
                <span>[??????] ????????? ??????????????????</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isSelected && (
                <ul className="selected-option-list selected">
                  {selectOption.map(value => {
                    return (
                      <li
                        key={value.id}
                        className="trigger"
                        data-price={value.price}
                        data-name={value.name}
                        onClick={this.clickItems}
                      >
                        {value.name} (
                        {parseInt(value.price.slice(0, -3)).toLocaleString()}
                        ???)
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
            {selectedItems.length > 0 &&
              selectedItems.map((data, index) => {
                return (
                  <section className="added-option" key={data.id}>
                    <section className="title-container">
                      <p className="option-title">{data.name}</p>
                      <img
                        alt="close"
                        src="/icon/close.svg"
                        onClick={this.removeItem}
                      />
                    </section>
                    <section className="quantity-container">
                      <section className="quantity-counter">
                        <button
                          className="quantity-minus"
                          onClick={() => this.countQuantity(index, 'minus')}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="quantity-count"
                          data-count="1"
                          Value={data.quantity}
                          onChange={true}
                        />
                        <button
                          className="quantity-plus"
                          onClick={() => this.countQuantity(index, 'plus')}
                        >
                          +
                        </button>
                      </section>
                      <section className="quantity-price">
                        <p>{(data.quantity * data.price).toLocaleString()}???</p>
                      </section>
                    </section>
                  </section>
                );
              })}
          </section>
          <div className="divide-line"></div>
          <section className="purchase-total">
            <p className="total-quantity">
              ??? ??????
              <span>{this.calculateQuantity()}</span>???
            </p>
            <p className="total-price">
              ??? ??????
              <span>{this.calculateMoney().toLocaleString()}</span>???
            </p>
          </section>
          <button className="add-card-button">????????????</button>
        </section>
      </div>
    );
  }
}

export default BottomModal;
