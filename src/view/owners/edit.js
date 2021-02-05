import React from 'react'
import { store, show, update, cep, change, success } from '../../store/actions/owners.action'
import { AppBar, Button, CircularProgress, IconButton, TextField, Toolbar, Typography } from "@material-ui/core";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { changeScreenB } from '../../store/actions/navigation.action';
import { FaSave } from 'react-icons/fa';

export default function OwnerEdit(props) {
    const dispatch = useDispatch()
    const owner = useSelector(state => state.ownersReducer.owner)
    const error = useSelector(state => state.ownersReducer.error)
    const response = useSelector(state => state.ownersReducer.success)
    const owner_id = (props.owner_id) ? props.owner_id : null

    const [ isLoading, setLoading ] = React.useState(true)
    const [ isLoadingCep, setLoadingCep ] = React.useState(false)

    React.useEffect(() => {
        if(response && dispatch(changeScreenB({open: false})));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response])

    React.useEffect(() => {
        _index()
        return () => {
            dispatch(success(false))
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const _index = () => {
        if(owner_id){
            dispatch(show(owner_id)).then(res => res && setLoading(false))
        }else{
            dispatch(change('clear'))
            setLoading(false)
        }
    }

    return (
        <>
            <AppBar position="absolute">
                <Toolbar>
                    <IconButton onClick={() => dispatch( changeScreenB({ open: false }) )} edge="start" color="inherit">
                        <MdKeyboardBackspace />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {(owner_id) ? 'Editar proprietário' : 'Novo proprietário'}
                    </Typography>
                    <Button onClick={() => owner_id ? dispatch(update(owner)) : dispatch(store(owner))} color="inherit" className="ms-auto">
                        <FaSave className="me-2" /> Salvar
                    </Button>
                </Toolbar>
            </AppBar>
            <div className="scroll card-body">
                {(isLoading) ? <div className="d-flex justify-content-center mt-5 pt-5"> <CircularProgress/> </div> :
                        <>
                            <h6 className="mb-4 text-secondary">Dados pessoais</h6>
                            <div className="form-group">
                                <label className="label-custom">Nome</label>
                                <TextField
                                    fullWidth
                                    error={(error.name) && true}
                                    value={owner.name || ''}
                                    onChange={text => {
                                        dispatch(change({name: text.target.value}))
                                        if(error.name && delete error.name);
                                    }}
                                />
                                {(error.name) && 
                                    <strong className="text-danger">{error.name[0]}</strong>
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}
