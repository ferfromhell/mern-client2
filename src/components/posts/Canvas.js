import React, { Component } from 'react'

class Canvas extends Component {
    state = {
        isDrawing: false,
        lines: new Immutable.list()
    }
    handleMouseDown = (event) => {
        if (event.button !== 0) return
        const point = this.relativeCoordinatesForEvent(event);
        this.setState(prevState => {
            return {
                lines: prevState.lines.push(new Immutable.List([point])),
                isDrawing: true,
            }
        })
    }
    relativeCoordinatesForEvent(event) {
        const boundingRect = this.refs.drawArea.getBoundingClientRect();
        
        return new Immutable.Map({
          x: event.clientX - boundingRect.left,
          y: event.clientY - boundingRect.top,
        });
    handleMouseUp = () => {
    }
    render() {
        return (
            <div ref="drawArea" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove}/>
        )
    }
}
export default  Canvas