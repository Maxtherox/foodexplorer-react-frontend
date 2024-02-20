import { Container, Menu, Content, ContentMenu, Headerbase } from "./styles";
import logoIcon from "../../assets/Logo.svg"
import MenuIcon from "../../assets/icons/Menu.svg"
import OrderIcon from "../../assets/icons/carrinho.svg"
import CloseIcon from "../../assets/icons/close.svg"
import Search  from "../Search";

import LogoutSvg from "../../assets/icons/logout.svg"
import { Link } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';


export function Header({onSearch} ){

    const {user, signOut} = useAuth();
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    function openNav() {    
     document.getElementById("mySidebar").style.visibility = "visible";
     document.getElementById("mySidebar").style.animation = "menuOpen 0.5s";
     document.getElementById("mySidebar").style.width = "100%";
      }
      function closeNav() {   
          document.getElementById("mySidebar").style.visibility = "hidden";
          document.getElementById("mySidebar").style.animation = "menuClose 0.5s";
          document.getElementById("mySidebar").style.width = "100%";
      }
      let prevScrollpos = window.scrollY;
        window.onscroll = function() {
            let currentScrollPos = window.scrollY;
            if (prevScrollpos < currentScrollPos) {
                document.getElementById("navbar").style.position = "fixed"
                document.getElementById("navbar").style.top = "0";
            }
        prevScrollpos = currentScrollPos;
    }
    return(
        <Container >
            <Headerbase id="navbar">
                <Content>
                <a className="MenuOpen" onClick={openNav} ><img src={MenuIcon} alt="" /></a>
                {user.role === USER_ROLE.CUSTOMER &&
                <h1><img src={logoIcon} alt=""/>food explorer</h1>
                }
                {user.role === USER_ROLE.ADMIN && 
                <h1><img src={logoIcon} alt=""/>food explorer <span className="admintag">admin</span> </h1>
                }
                <Search onSearch={onSearch}  className="search"/>   
                {user.role === USER_ROLE.CUSTOMER &&
                <Link to="/notfound" className="teste" href="">
                    <label htmlFor="">0</label>
                    <p>Pedidos: </p>
                    <img src={OrderIcon} alt=""/>              
                </Link>  
                }
                {user.role === USER_ROLE.ADMIN &&
                <Link to="/new" className="teste" href="">
                    <p>Novo prato</p>         
                </Link>  
                }
                <Link onClick={handleSignOut} className="logoutdisable" href=""><img src={LogoutSvg} alt="logout" /></Link>
                </Content>
            <Menu id="mySidebar">
                <ContentMenu>
                    <a onClick={closeNav}><img src={CloseIcon} alt="" />Menu</a>
                </ContentMenu>
                <main>
                  <Search onSearch={onSearch}/>
                  {user.role === USER_ROLE.ADMIN &&
                    <Link to="/new" onClick={closeNav}>Novo prato</Link>  
                  }              
                  <Link onClick={handleSignOut}>Sair</Link>  
                </main>
            </Menu>
            </Headerbase>
        </Container>
        
    )
}
