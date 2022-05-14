import styled from 'styled-components';

export const SidebarTop = styled.div`
background : papayawhip;
padding:.5rem;
`
export const ButtonToggle = styled.button`
background : transparent;
border:none;
color:palevioletred;
padding: 1rem;
margin-left:5rem;
&:hover {
    background : #fff;
    border-radius:50%;
    cursor : pointer;
}
`
export const Sidebarleft = styled.div`
background : papayawhip;
width: 100%;
transform: ${props => props.toggle ? " translateX(0rem)" : " translateX(-50rem)"};;
height: 100vh;
transition: all ease-in-out .4s;
`

export const Ul = styled.ul`
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding-top: 4rem;
row-gap: 3rem;
font-size: 1.5rem;
font-weight: 700;
color:rebeccapurple;
`

export const Li = styled.li`
padding-bottom: 0.3rem;
border-bottom: dashed .1rem rebeccapurple;
cursor : pointer;
list-style-type: none;
`
export const Flex = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;
`

export const Type = styled.h1`
display: grid;
`