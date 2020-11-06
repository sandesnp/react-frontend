import React, { Fragment, useState } from 'react';
import {
	Nav,
	NavItem,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	NavLink,
} from 'reactstrap';

export default function Navigation(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(!dropdownOpen);

	return (
		<Fragment>
			<div
				style={{
					border: '1px solid black',
					borderRadius: '5px 5px 5px 5px',
					margin: '0 0 15px 0',
				}}
			>
				<Nav pills>
					<NavItem>
						<NavLink href="/" active>
							Clother Store
						</NavLink>
					</NavItem>
					<Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
						<DropdownToggle nav caret>
							Dropdown
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem header>Header</DropdownItem>
							<DropdownItem disabled>Action</DropdownItem>
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Another Action</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<NavItem>
						<NavLink href="/products">Our Products</NavLink>
					</NavItem>

					<NavItem>
						<NavLink disabled href="#">
							Disabled Link
						</NavLink>
					</NavItem>
				</Nav>
			</div>
		</Fragment>
	);
}
