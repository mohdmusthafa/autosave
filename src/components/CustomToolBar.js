import React from 'react'

class CustomToolBar extends React.PureComponent {
    render() {
        return (
            <div>
                <div id="toolbar">
                    <select className="ql-font" defaultValue={'open-sans'}>
                        <option value="arial">Arial</option>
                        <option value="comic-sans">Comic Sans</option>
                        <option value="open-sans">Open Sans</option>
                        <option value="courier-new">Courier New</option>
                        <option value="georgia">Georgia</option>
                        <option value="helvetica">Helvetica</option>
                        <option value="lucida">Lucida</option>
                    </select>
                    <select className="ql-size" defaultValue={'medium'}>
                        <option value="extra-small">Size 1</option>
                        <option value="small">Size 2</option>
                        <option value="medium">Size 3</option>
                        <option value="large">Size 4</option>
                    </select>
                    <select className="ql-align" />
                    <select className="ql-color" />
                    <select className="ql-background" />
                    <button className="ql-clean" />
                </div>
            </div>
        )
    }
}

export default CustomToolBar