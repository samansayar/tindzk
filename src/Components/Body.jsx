import React, { useState } from 'react'
import Header from './Header';
import { SidebarTop, ButtonToggle, Sidebarleft, Ul, Li, Grid , Flex } from './Styled/Body.styled';

export default function Body() {
    const [open, setopen] = useState(false)
    return (
        <>
            <div className="flex">
                <SidebarTop>
                    <ButtonToggle onClick={() => setopen(!open)}>
                        <svg width='30px' height='30px' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </ButtonToggle>
                </SidebarTop>
                <Flex>
                    <Flex>
                        <Sidebarleft toggle={open}>
                            <Ul>
                                <Li>Home</Li>
                                <Li>Blog</Li>
                                <Li>About</Li>
                                <Li>Shop</Li>
                                <Li>Contact Us</Li>
                            </Ul>
                        </Sidebarleft>
                    </Flex>
                        <Header />
                </Flex>
            </div>
        </>
    )
}
