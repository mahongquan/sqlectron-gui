import * as React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Divider, Transition,Button,Input, Grid, Header, List, Segment, Icon, Modal } from 'semantic-ui-react';
import Checkbox from './components/checkbox.jsx' 
import Dialog from './Modal1.jsx';
// import styled from "styled-components";
// //import Application from './demo/index.js';
// const StyledView = styled.h1`
//   background-color: papayawhip;
// `;

// const StyledText = styled.section`
//   color: palevioletred;
// `;

class App extends React.Component{
  state={value:true, modalOpen: false, visible: true }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })
  buttonClick=()=>{
    console.log(this.props.history);
    this.props.history.push("/sql/manage");
  }
  onChange=()=>{
    console.log("onChange");
      var v=!this.state.value;
      this.setState({value:v});
  }
  clickno=()=>{
    console.log("clickno");
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    console.log(this.state);
    const { visible } = this.state
    return (
      <div>
       <Button onClick={this.buttonClick}>sqlui</Button>
       <Input type="checkbox" checked={this.state.value}  
                    onChange={this.onChange} >
       </Input>


       <Checkbox name="Checkbox" label="Checkbox"
            defaultChecked={this.state.value} 
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
     <Button content={visible ? 'Hide' : 'Show'} onClick={this.toggleVisibility} />
    <Divider hidden />
     <Transition visible={visible} animation='scale' duration={5000}>
          <div> i am disapear............. </div>
     </Transition>
     
      <Dialog handleClose={this.handleClose} modalOpen={this.state.modalOpen}/>
      </div>
    );
  }
}
export default withRouter(App);