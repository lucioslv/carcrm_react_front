import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const Auth = lazy(() => import('./view/auth'))
const Register = lazy(() => import('./view/register'))
const Vehicles = lazy(() => import('./view/vehicles'))

const Routes = () => (
    <Router>
        <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress/> </div>}>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="/login" component={Auth}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/vehicles" component={Vehicles}/>
            </Switch>
        </Suspense>
    </Router>
)

export default Routes