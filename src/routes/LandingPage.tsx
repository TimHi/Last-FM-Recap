import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setName } from '../store/userSlice';
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";



function LandingPage() {
    const userName = useSelector((state: RootState) => state.user.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleUserNameInput(event: ChangeEvent<HTMLInputElement>): void {
        dispatch(setName(event.target.value))
    }

    return <>
        <h1>Last.fm Recap</h1>
        <input onChange={handleUserNameInput} value={userName}></input>
        <button onClick={() => { navigate("/artists") }}>Next!</button>
    </>;
}

export default LandingPage