import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() { 
        return (
                <div>
                    <span className={this.badgeColor()}>{this.formatCount()}</span>
                    <button className="btn btn-secondary btn-sm">Increment</button>

                    <ul>
                        {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}
                    </ul>

                </div>
        );
    }

    formatCount(){
        const { count } = this.state // selecciono el estado count de la variable state y lo guardo en la variable count
        return count == 0 ? "Zero" : count;
    }

    badgeColor(){
        let classes = "badge m-2 bg-";
        classes += this.state.count == 0 ? "warning text-dark" : "primary"
        return classes
    }
}
 
export default Counter;

