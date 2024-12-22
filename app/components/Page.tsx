import { Container } from '@mui/material';
import Header from './Header';


export default function Page({ answer, nextPath, children }
    : {
        answer: string,
        nextPath: string,
        children: React.ReactNode,
    }) {
    return <Container>
            <Header answer={answer} nextHref={nextPath}/>
            {children}
           </Container>
}