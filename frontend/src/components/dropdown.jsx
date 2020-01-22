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

    // window.onclick = function (event) {
    //     if (!event.target.matches('.dd-list') && this.state.listOpen === true) {
    //         this.toggleList
    //     }
    // }


    render() {
        const { list } = this.props
        const { listOpen, headerTitle } = this.state
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <i className="fas fa-angle-up"></i>
                        : <i className="fas fa-angle-down"></i>
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {list.map((item, idx) => (
                        <li className={`dd-list-item-${item.selected}`} key={idx} onClick={() => this.props.handleClick(item.id, this.props.ability)}>{item.title}</li>
                    ))}
                </ul>}
            </div>
        )
    }

}

export default DropDown;