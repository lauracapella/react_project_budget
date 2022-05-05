import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Wellcome from '../pages/wellcome'
import Budget from '../pages/budget'

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {< Wellcome />} />
            <Route path="/budget/" element = {<Budget/>} />
            <Route path="*" element = {<div>404</div>} />
        </Routes>
    </BrowserRouter>
)