import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags</p>
        return  <ul>
                    {this.state.tags.map(tag => <li key={tag} > {tag} </li>)}
                </ul>
    }
    // importante primero llamar a super

    /*
        Las funciones en JS son OBJETOS por ende el THIS refiere a ellas mismas. Por ello debemos modificar el binding de la funcion
        Eso es lo que hago en el contructor
    */

    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this) // este codigo es necesario para todos los event handlers que usen variables del objeto
    }

    // Tambien podemos hacer esto:
    /*

    handleIncrement = () => {
        ...
    }

    Con esta forma no necesitamos de hacer esa chanchada en el constructor

    */



    // dentro de esta funcion no tenemos acceso a el this, necesitamos hacer un constructor.
    handleIncrement(product){ // funcion que maneja el evento click en el boton
        // this.state.count++ Esto no anda. No se updatea el numero
        console.log(product)
        this.setState({ value: this.state.value+1 }) // le pasamos un objeto que diga lo que cambio para que react lo modifique en la pantalla
    }

    // Cuando cambiamos el state se rellama a la funcionn render en algun momento y lo que hace es renderizar nuevamente todo comparando
    // los elementos hasta detectar cual fue modificado, de esta forma solo se actualiza 1 elemento o los elementos necesario y no toda la pagina


    // si queremos pasar parametros a handleIncrement como por ejemplo el ID del elemento que se actualizo hay que hacer cosas raras
    // una inline function es una funcion lambda en el lugar de onClick
    // commo no podemos mandarle parametros, sino que en el evento llamamos a una referencia a la funcion debemos hacer una funcion wrapper o una inline function

    render() { 
       // console.log("props", this.props)

        return (
                    // otra forma de renderizar algo si con una condicion
                    // lo que pasa es que podes aplicar operaciones logicas entre valores booleanos o no booleanos
                    // Lo que hace es leer true && NotBoolean y como el primero es true devuelve el segundo.
                    // si fuesen 3 : true && "hi" && 1 devuelve 1, ya que toma el primero como True, el segundo como TrueSi y por ende devuelve el 3ro
               
                    // IMPORTANTE QUE LOS EVENT HANDLERS NO VAN CON () cuando se los llama
               <div>

                    {this.state.tags.length === 0 && "Please create a new tag"} 

                    <span className={this.badgeColor()}>{this.formatCount()}</span>
                    <button onClick={() => this.handleIncrement({ id : 1 })} className="btn btn-secondary btn-sm">Increment</button> 

                    
                </div>
        );
        // {this.renderTags()}
    }

    formatCount(){
        const { value } = this.state // selecciono el estado count de la variable state y lo guardo en la variable count
        return value == 0 ? "Zero" : value;
    }

    badgeColor(){
        let classes = "badge m-2 bg-";
        classes += this.state.value == 0 ? "warning text-dark" : "primary"
        return classes
    }
}
 
export default Counter;

