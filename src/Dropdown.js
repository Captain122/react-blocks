import React, {Component} from 'react';

class Dropdown extends Component{
   constructor(props){
       super(props);  // переопределяя конструктор, нам нужно не сломать приложение.
       this.state={ isOpened: false}; //создали переменную isOpened в стейте и поставили ее в false;
   }
   toggleState(){
       this.setState({isOpened: !this.state.isOpened}); //oggleState мы вызываем метод setState, который позволяет нам менять стейт.
   }
    render(){
        console.log('isOpened',this.state.isOpened)
        let Texxt;
        if(this.state.isOpened){
            Texxt =<div>study react every day</div>
        }
        return <div onClick={this.toggleState.bind(this)}>
        {Texxt}
        Dropdown area,fff
        </div> //в onClick метод передается без вызова, т.е. без круглых скобок иначе он вызовется сразу.
    }
}
export default Dropdown; 