import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';


export default function Login() 
{
    const [id, SetId] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = (e) =>
    {
            e.preventDefault();
            console.log('로그인 시도:', {id,password});
            navigate('/dashboard');
    };

    return(
        <div className="loginCard">
            <h2 className="loginTitle">로그인</h2>
            <p className="loginSubtitle">시스템 계정으로 로그인하세요</p>

            <form onSubmit={handleSubmit}>
                <div className="loginFormGroup">
                    <label htmlFor="username">아이디</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="아이디를 입력하세요."
                        value={id}
                        onChange={(e)=>SetId(e.target.value)}
                        required>
                    </input>
                </div>

                <div className="loginFormGroup">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="비밀번호를 입력하세요."
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required>
                    </input>
                </div>
                <button type="submit" className="btn btnLogin">로그인</button>
                <button type="button" className="btn btnRegister"
                onClick={()=>navigate('/register')}>회원가입</button>
            </form>
        </div>
    )

}

