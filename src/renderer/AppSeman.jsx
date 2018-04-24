import React, { Component } from 'react';
import {Divider, Button,Transition,Input, Grid, Header, List, Segment, Icon, Modal } from 'semantic-ui-react';
import {Dimmer, Image, Loader } from 'semantic-ui-react'
import Checkbox from './components/checkbox.jsx' 
import Dialog from './Modal1.jsx';
import PropTypes from 'proptypes';

class App extends React.Component{
  state={value:true, modalOpen: false, visible: true,active:false}

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  onChange=()=>{
    console.log("onChange");
      var v=!this.state.value;
      this.setState({value:v});
  }
  clickno=()=>{
    console.log("clickno");
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  render() {
    // console.log(this.state);
    const { visible,active } = this.state;
    const arr1=[{text:"a"},{text:"b"},{text:"c"}];
    return (
      <div>
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={active}>
          <Dimmer active={active} inverted>
            <Loader>Loading</Loader>
          </Dimmer>

          <p>
            <Image src='./edit.png' />
          </p>
          <p>
            <Image src='./edit.png' />
          </p>
        </Dimmer.Dimmable>

        <Button.Group>
          <Button onClick={this.handleShow}>loading</Button>
          <Button onClick={this.handleHide}>loading finish</Button>
        </Button.Group>
      </div>
       <Input type="checkbox" checked={this.state.value}  
                    onChange={this.onChange} >
       </Input>


       <Checkbox name="Checkbox" label="Checkbox"
            defaultChecked={this.state.value} 
            checked={this.state.value}
            onChecked={() => {
                  console.log("onChecked");
                  this.setState({ value: true })
                }
            }
            onUnchecked={
              () =>{
                this.setState({ value:false});
              }
            } 
       ></Checkbox>
       {
       // <StyledView>
       //  <StyledText>Hello World!</StyledText>
       // </StyledView>
     }
     <Button onClick={this.handleOpen}>Show Modal</Button>
     <Button content={visible ? 'Hide Transition' : 'Show Transition'}  onClick={this.toggleVisibility} />
    <Divider hidden />
     <Transition visible={visible} animation='scale' duration={2000}>
          <div> i am disapear............. </div>
     </Transition>
     
      {  <Dialog handleClose={this.handleClose} modalOpen={this.state.modalOpen}/>
      }
      </div>
    );
  }
}
export default App;