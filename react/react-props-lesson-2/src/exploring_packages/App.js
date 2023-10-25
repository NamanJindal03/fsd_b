import React, {useState} from 'react'
import { FaBeer, FaCanadianMapleLeaf } from "react-icons/fa";
import { 
    Button, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
    const notify = () => toast.success('🦄 Wow so easy!');
    // const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [modal, setModal] = useState(false);

    const toggle2 = () => setModal(!modal);

  return (
    <>
    
        <div>App</div>
        Lets go for a <FaBeer />?
        Lets go to Canada <FaCanadianMapleLeaf />
        <button>normal button</button>
        <Button onClick={notify}>Notify!</Button>
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button onClick={toggle2} >
      Button
    </Button>
  </CardBody>
</Card>
<ToastContainer 
    theme='dark'
    position="top-center"
/>
{/* <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='up' >
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu >
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      <Button color="danger" onClick={toggle2}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle2} >
        <ModalHeader toggle={toggle2}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle2}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle2}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
