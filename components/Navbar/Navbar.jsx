import Image from "next/image";
import styles from './Navbar.module.scss'
import { Button } from "@mui/material";

const Navbar = () =>{
    const NavbarLinks =[
        {
            url:"",
            label:"Crypto Taxes",
        },
        {
            url:"",
            label:"Free Tools",
        },
        {
            url:"",
            label:"Resource Center",
        },
    ]
    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.leftSection}>
                <a href="" className={styles.logo}>
                    <Image src='./KoinXLogo.svg' width={96} height={24} alt={'KoinX-Logo'}/>
                </a>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.navbarItems}>
                    {
                        NavbarLinks.map((item)=>{
                            return(
                                <a href={item.url} key={item.label}>{item.label}</a>
                            );
                        })
                    }
                </div>
                <Button variant="contained">Get Started</Button>
            </div>

        </nav>
    );
}
export default Navbar;