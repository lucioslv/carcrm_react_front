import React from 'react'
import { index, store, update, destroy, change } from '../../store/actions/notes.action'
import { changeScreemC } from '../../store/actions/navigation.action'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'

export default function Notes(props) {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notesReducer.notes)
    const note = useSelector(state => state.noteReducer.note)
    const theme = useTheme()
    const [ isLoading, setLoading ] = React.useState(true)
    const [ isLoadMore, setLoadMore ] = React.useState(false)
    const [ query, setQuery ] =  React.useState({
        uid: (props.uid) ? props.uid : null,
        type: (props.type) ? props.type : null,
        page: 1 
    })
    const [ state, setState ] = React.useState({
        isLoading: false,
        isDeleted: null,
        isEdited: null,
        menuEl: null,
        confirmEl: null
    })

    return (
        <div>
            
        </div>
    )
}
