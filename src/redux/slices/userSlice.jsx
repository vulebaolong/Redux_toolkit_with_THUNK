import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    userLogin: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        loginREDU: (state, { payload }) => {
            state.userLogin = payload;
        },
    },
});

export const { loginREDU } = userSlice.actions;

export default userSlice.reducer;

// =========================MIDLEWARE============================

//loginMID
export const loginMID = (requestData) => {
    return async (dispatch) => {
        try {
            const { data, status } = await axios.post(`https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`, requestData, {
                headers: {
                    TokenCybersoft:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I",
                },
            });

            console.log("loginMID", { data, status });

            //lưu userLogin
            dispatch(loginREDU(data.content));
        } catch (err) {
            console.log(err);
        }
    };
};
