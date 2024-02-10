import { Container, Menu, Content, ContentMenu, Headerbase } from "./styles";
import logoIcon from "../../assets/Logo.svg"
import MenuIcon from "../../assets/icons/Menu.svg"
import OrderIcon from "../../assets/icons/carrinho.svg"
import CloseIcon from "../../assets/icons/close.svg"
import { Search } from "../Search";
import { Footer } from "../Footer";

export function Header(){
    function openNav() {    
     document.getElementById("mySidebar").style.visibility = "visible";
     document.getElementById("mySidebar").style.animation = "menuOpen 0.5s";
     document.getElementById("mySidebar").style.width = "100%";
     preventDefault();
      }
      function closeNav() {
       
          document.getElementById("mySidebar").style.visibility = "hidden";
          document.getElementById("mySidebar").style.animation = "menuClose 0.5s";
          document.getElementById("mySidebar").style.width = "0%";
        

        preventDefault();
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
                <a className="teste" href="">
                    <label htmlFor="">0</label>
                    <p>Pedidos: </p>
                    <img src={OrderIcon} alt="" />              
                </a>  
                </Content>
            
            
                

            <Menu id="mySidebar">
                <ContentMenu>
                    <a onClick={closeNav}><img src={CloseIcon} alt="" />Menu</a>
                </ContentMenu>
                <main>
                  <Search/>
                  <a onClick={closeNav}>Sair</a>  
                </main>
            </Menu>
            </Headerbase>
        </Container>
        
    )
}