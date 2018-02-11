// import React from 'react';
// import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
// import SvgIcon from 'react-icons-kit';
 
// import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
// import { ic_business } from 'react-icons-kit/md/ic_business';
 
 
// //specify the base color/background of the parent container if needed 
// export const MySideNav = () => (
//     <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
//         <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
//             <Nav id='dashboard'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> Dashboard </NavText>
//             </Nav>
//             <Nav id='sales'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> Sales </NavText>
//             </Nav>
//             <Nav id='home'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> home </NavText>
//             </Nav>
//             <Nav id='game'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> game </NavText>
//             </Nav>
//             <Nav id='aaa'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> aaa </NavText>
//             </Nav>
//             <Nav id='bbb'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> bbb </NavText>
//             </Nav>
//             <Nav id='ccc'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> ccc </NavText>
//             </Nav>
//             <Nav id='dddd'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> dddd </NavText>
//             </Nav>
//             <Nav id='eeee'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> eeee </NavText>
//             </Nav>
//             <Nav id='ffff'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> ffff </NavText>
//             </Nav>
//             <Nav id='gggg'>
//                 <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
//                 <NavText> gggg </NavText>
//             </Nav>
//             <Nav id='hhhh'>
//                 <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
//                 <NavText> hhhh </NavText>
//             </Nav>
//         </SideNav>
//     </div>
// )
//////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { render } from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
// import YourAppContent from 'path/to/your/app/content'
 
export const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];
 
render (
  <Sidebar content={items}>
    {/* <YourAppContent /> */}
  </Sidebar>
, document.findElementById("render-target"))