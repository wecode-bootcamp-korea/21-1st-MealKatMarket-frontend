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

  handleToggleClick = e => {
    const {
      target: { name },
    } = e;

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
      price,
      quantity: 1,
    };
    const newSelectedItems = selectedItems.concat(selectedItemObj);
    this.setState({ selectedItems: newSelectedItems });
  };

  countQuantity = idx => {
    const { selectedItems } = this.state;
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
                name="isRequired"
                onClick={this.handleToggleClick}
              >
                <span>[필수] 옵션을 선택해주세요</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isRequired && (
                <ul className="required-option-list selected">
                  {requireOption.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className="trigger"
                        data-price={value.option_price}
                        data-name={value.option_name}
                        onClick={this.clickItems}
                      >
                        {value.option_name} (
                        {value.option_price.toLocaleString('kr')}
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
                onClick={this.handleToggleClick}
              >
                <span>[선택] 옵션을 선택해주세요</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isSelected && (
                <ul className="selected-option-list selected">
                  {selectOption.map((value, index) => {
                    return (
                      <li
                        key={index}
                        className="trigger"
                        data-price={value.option_price}
                        data-name={value.option_name}
                        onClick={this.clickItems}
                      >
                        {value.option_name} (
                        {value.option_price.toLocaleString('kr')}
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
                  <section className="added-option">
                    <section className="title-container">
                      <p className="option-title">{data.name}</p>
                      <img alt="close" src="/icon/close.svg" />
                    </section>
                    <section className="quantity-container">
                      <section className="quantity-counter">
                        <button
                          className="quantity-minus"
                          onClick={() => this.countQuantity(index)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          class="quantity-count"
                          data-count="1"
                          defaultValue={data.quantity}
                        />
                        <button
                          className="quantity-plus"
                          onClick={() => this.countQuantity(index)}
                        >
                          +
                        </button>
                      </section>
                      <section className="quantity-price">
                        <p>{data.price.toLocaleString('kr')}원</p>
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
              <span>0</span>개
            </p>
            <p className="total-price">
              총 금액
              <span>0</span>원
            </p>
          </section>
          <button className="add-card-button">카트담기</button>
        </section>
      </div>
    );
  }
}

export default BottomModal;
