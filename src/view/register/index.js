import { TextField, Typography, Button } from '@material-ui/core'
import { change, register } from '../../store/actions/register.action'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function Register() {
    const dispatch = useDispatch()
    const { user, error, success} = useSelector(state => state.registerReducer)

    return (
        <div className="d=flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group text-center">
                            <img src="/logo.png" alt="Logo" height="48"/>
                            <Typography className="mt-3" variant="h6" component="h1">Cadastro</Typography>
                        </div>
                        <TextField
                            error={(error.name) && true}
                            fullWidth
                            margin="normal"
                            label="Nome"
                            value={user.name}
                            onChange={text => {
                                dispatch(change({name: text.target.value}))
                                if(error.name && delete error.name);
                            }}
                        />
                        {(error.name) &&
                            <strong className="text-danger">{error.name[0]}</strong>
                        }
                        <TextField
                            error={(error.email) && true}
                            fullWidth
                            margin="normal"
                            label="E-mail"
                            type="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={text => {
                                dispatch(change({email: text.target.value}))
                                if(error.email && delete error.email);
                            }}
                        />
                        {(error.email) &&
                            <strong className="text-danger">{error.email[0]}</strong>
                        }
                        <TextField
                            error={(error.password) && true}
                            fullWidth
                            margin="normal"
                            label="Senha"
                            type="password"
                            autoComplete="password"
                            value={user.password}
                            onChange={text => {
                                dispatch(change({password: text.target.value}))
                                if(error.password && delete error.password);
                            }}
                        />
                        {(error.password) &&
                            <strong className="text-danger">{error.password[0]}</strong>
                        }
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="mt-4 mb-4"
                            onClick={() => dispatch(register(user))}
                        >
                            Cadastrar
                        </Button>
                        <div className="text-center">
                            <Link to="/login" className="mt-4 text-primary">Login</Link>
                        </div>

                        {(success) && 
                            <Redirect to="vehicles"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
