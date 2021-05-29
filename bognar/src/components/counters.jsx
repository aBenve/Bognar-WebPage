import React, { Component } from 'react';

import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value:4 },
            { id: 2, value:0 },
            { id: 3, value:0 },
            { id: 4, value:0 },
            { id: 5, value:0 }
        ]
    }

    // para pasarle el value y selected estamos usando props. Todos los componentes tienen una propiedad llamada props
    // que contiene todos los atributos del componente
    // en este caso las props son value=x y selected=true

    // para realmente usarlos, camos al counter y cambiamos el valor de count = this.props.value

    render() { 
        return (<div>
                    {this.state.counters.map(counter => 
                        <Counter key={counter.id} value={counter.value} selected={true}/>
                    )}
                </div>);
    }
}
 
export default Counters;