import React from 'react';
import './BottomModal.scss';

class BottomModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isRequired: false,
      isSelected: false,
      selectedItems: [],
      totalCount: 0,
      totalMoney: 0,
    };
  }

  handleToggleClick = name => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  removeItem = e => {
    console.log(e);
  };

  componentDidUpdate() {
    console.log(this.state.selectedItems);
  }

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
    this.setState({ selectedItems: newSelectedItems }, () => {
      this.calculateMoney();
      this.calculateQuantity();
    });
  };

  calculateQuantity = () => {
    const { selectedItems } = this.state;
    const totalCount = selectedItems.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
    this.setState({ totalCount });
  };

  calculateMoney = () => {
    const { selectedItems } = this.state;
    const totalMoney = selectedItems.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
    this.setState({ totalMoney });
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
    this.setState({ selectedItems: newSelectedItems }, () => {
      this.calculateMoney();
      this.calculateQuantity();
    });
  };

  render() {
    const { isRequired, isSelected, selectedItems, totalCount, totalMoney } =
      this.state;
    const { requireOption, selectOption, toggleModal } = this.props;

    return (
      <div className="outer">
        <div className="overlay" onClick={toggleModal}></div>
        <section className="BottomModal">
          <section className="modal-header">
            <p></p>
            <p className="header-title">옵션선택</p>
            <button className="close-button">
              <img alt="close" src="/icon/Close.svg" onClick={toggleModal} />
            </button>
          </section>
          <section className="modal-option">
            <section className="required-option">
              <p className="title">필수옵션</p>
              <button
                className="trigger"
                onClick={() => this.handleToggleClick('isRequired')}
              >
                <span name="isRequired">[필수] 옵션을 선택해주세요</span>
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
                        data-price={value.option_price}
                        data-name={value.option_name}
                        onClick={this.clickItems}
                      >
                        {value.option_name} (
                        {value.option_price.toLocaleString()}
                        원)
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
            <section className="selected-option">
              <p className="title">선택옵션</p>
              <button
                className="trigger"
                name="isSelected"
                onClick={() => this.handleToggleClick('isSelected')}
              >
                <span>[선택] 옵션을 선택해주세요</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isSelected && (
                <ul className="selected-option-list selected">
                  {selectOption.map(value => {
                    return (
                      <li
                        key={value.id}
                        className="trigger"
                        data-price={value.option_price}
                        data-name={value.option_name}
                        onClick={this.clickItems}
                      >
                        {value.option_name} (
                        {value.option_price.toLocaleString()}
                        원)
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
                        <p>{(data.quantity * data.price).toLocaleString()}원</p>
                      </section>
                    </section>
                  </section>
                );
              })}
          </section>
          <div className="divide-line"></div>
          <section className="purchase-total">
            <p className="total-quantity">
              총 수량
              <span>{totalCount}</span>개
            </p>
            <p className="total-price">
              총 금액
              <span>{totalMoney.toLocaleString()}</span>원
            </p>
          </section>
          <button className="add-card-button">카트담기</button>
        </section>
      </div>
    );
  }
}

export default BottomModal;
