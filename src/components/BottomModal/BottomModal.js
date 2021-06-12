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
    const { selectedItems } = this.state;
    const {
      target: {
        dataset: { name, price },
      },
    } = e;
  };

  render() {
    const { isRequired, isSelected, selectedItems } = this.state;
    const { toggleModal } = this.props;

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
              <p className="required-title">필수옵션</p>
              <button
                className="required-trigger"
                name="isRequired"
                onClick={e => this.handleToggleClick(e)}
              >
                <span>[필수] 옵션을 선택해주세요</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isRequired && (
                <ul className="required-option-list selected">
                  {/* fetch시 map으로 돌릴 예정 */}
                  <li
                    className="required-option-item"
                    data-price="3000"
                    data-name="도시락1"
                    onClick={this.clickItems}
                  >
                    도시락1
                  </li>
                </ul>
              )}
            </section>
            <section className="selected-option">
              <p className="selected-title">선택옵션</p>
              <button
                className="selected-trigger"
                name="isSelected"
                onClick={e => this.handleToggleClick(e)}
              >
                <span>[선택] 옵션을 선택해주세요</span>
                <img alt="append" src="/icon/UnderArrow.svg" />
              </button>
              {isSelected && (
                <ul className="selected-option-list selected">
                  {/* fetch시 map으로 돌릴 예정 */}
                  <li className="selected-option-item">기타1</li>
                </ul>
              )}
            </section>
            {selectedItems.length > 0 && (
              <section className="added-option">
                <section className="title-container">
                  <p className="option-title">화덕 연어스테이크</p>
                  <img alt="close" src="/icon/close.svg" />
                </section>
                <section className="quantity-container">
                  <section className="quantity-counter">
                    <button className="quantity-minus">-</button>
                    <input
                      type="text"
                      class="quantity-count"
                      data-count="1"
                      value="1"
                    />
                    <button className="quantity-plus">+</button>
                  </section>
                  <section className="quantity-price">
                    <p>9,500원</p>
                  </section>
                </section>
              </section>
            )}
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
