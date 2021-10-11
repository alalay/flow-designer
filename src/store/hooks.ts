import { useDispatch as reduxUseDispatch } from 'react-redux';

export function useStoreActions(actionSelector: any) {
    const dispatch = reduxUseDispatch();
    const currAction = actionSelector(actions);

}