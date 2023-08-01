import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import viteLogo from "/vite.svg";
import "./App.css";
import { loginMID } from "./redux/slices/userSlice";

function App() {
    const [count, setCount] = useState(0);

    const dispatch = useDispatch()

    const { userLogin } = useSelector((state) => state.userSlices);

    console.log(userLogin);

    useEffect(() => {
        const data = {
            taiKhoan: "vulebaolong",
            matKhau: "123456",
        };
        dispatch(loginMID(data));
    }, []);

    return (
        <>
            <div>
                <a href="https://vitejs.dev">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
}

export default App;
