import { Container, Menu, Content, ContentMenu, Headerbase } from "./styles";
import logoIcon from "../../assets/Logo.svg"
import MenuIcon from "../../assets/icons/Menu.svg"
import OrderIcon from "../../assets/icons/carrinho.svg"
import CloseIcon from "../../assets/icons/close.svg"
import { Search } from "../Search";
import { Footer } from "../Footer";
import LogoutSvg from "../../assets/icons/logout.svg"
import { Link } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from '../../hooks/auth';

export function Header(){

    const {user} = useAuth();

    function openNav() {    
     document.getElementById("mySidebar").style.visibility = "visible";
     document.getElementById("mySidebar").style.animation = "menuOpen 0.5s";
     document.getElementById("mySidebar").style.width = "100%";
      }
      function closeNav() {   
          document.getElementById("mySidebar").style.visibility = "hidden";
          document.getElementById("mySidebar").style.animation = "menuClose 0.5s";
          document.getElementById("mySidebar").style.width = "0%";
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
                <h1><img src={logoIcon} alt=""/>food explorer </h1>
                <Search className="search"/>   
                {user.role === USER_ROLE.CUSTOMER &&
                    <a className="teste" href="">
                    <label htmlFor="">0</label>
                    <p>Pedidos: </p>
                    <img src={OrderIcon} alt="" />              
                </a>  
                }
                {user.role === USER_ROLE.ADMIN &&
                <Link to="/new" className="teste" href="">
                    <label htmlFor=""></label>
                    <p>Novo prato</p>
                    <img src={OrderIcon} alt="" />              
                </Link>  
                }
                <a className="logoutdisable" href=""><img src={LogoutSvg} alt="logout" /></a>
                </Content>
            <Menu id="mySidebar">
                <ContentMenu>
                    <a onClick={closeNav}><img src={CloseIcon} alt="" />Menu</a>
                </ContentMenu>
                <main>
                  <Search/>
                  <Link onClick={closeNav}>Sair</Link>  
                </main>
            </Menu>
            </Headerbase>
        </Container>
        
    )
}