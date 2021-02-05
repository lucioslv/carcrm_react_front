import React from 'react'
import { changeScreenA, changeScreenB } from '../../store/actions/navigation.action'
import { AppBar, Fab, IconButton, Toolbar, Typography } from '@material-ui/core'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'

export default function Owners() {
    const dispatch = useDispatch()

    const _create = () => {
        return dispatch(changeScreenB({
            open: true,
            type: 'owner-edit',
            props: {}
        }))
    }
    return (
        <>
            <AppBar position="absolute">
                <Toolbar>
                    <IconButton onClick={() => dispatch( changeScreenA({ open: false }) )} edge="start" color="inherit">
                        <MdKeyboardBackspace />
                    </IconButton>

                    <Typography variant="h6" color="inherit">Proprietários</Typography>
                </Toolbar>
            </AppBar>
            <div id="scroll" className="scroll">
                <Fab onClick={() => _create()} className="fab-bottom-right me-3 mb-3" color="primary">
                    <FaPlus/>
                </Fab>
            </div>
        </>
    )
}
