import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    clicked(id, ability) {
        this.props.handleClick(id, ability);
        this.toggleList();
    }

    render() {
        const { list } = this.props
        const { listOpen, headerTitle } = this.state
        let dropType = headerTitle.split(" ").splice(1,1)
        return (
            <div className={`dd-wrapper-${dropType}`}>
                <div className={`dd-header-${dropType}`} onClick={() => this.toggleList()}>
                    <div className={`dd-header-title-${dropType}`}>{headerTitle}</div>
                    {listOpen
                        ? <i className="fas fa-angle-up"></i>
                        : <i className="fas fa-angle-down"></i>
                    }
                </div>
                {listOpen && <ul className={`dd-list-${dropType}`}>
                    {list.map((item, idx) => (
                        <li className={`dd-list-item-${dropType} ${item.selected}`} key={idx} onClick={() => this.clicked(item.id, this.props.ability)}>{item.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }

}

export default DropDown;