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
  DropdownItem,
} from 'reactstrap';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function App() {
    const notify = () => toast.success('🦄 Wow so easy!');
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
<ToastContainer 
    theme='dark'
    position="top-center"
/>
<Dropdown isOpen={dropdownOpen} toggle={toggle} direction='up' >
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
      </Dropdown>
    </>
  )
}
