import { AppBar, Toolbar, styled } from '@mui/material';
import logo from '../image/logo.jpg';

const StyleHeader= styled(AppBar)`
    background:#000
`

const Image = styled('img')({
    width: 250
});


const Header=()=>{
    return (
        <StyleHeader position="static">
            <Toolbar>
                <Image src={logo} alt=""/>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;