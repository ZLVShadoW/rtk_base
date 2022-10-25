import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {RootState, AppDispatch} from '../Bll/store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector