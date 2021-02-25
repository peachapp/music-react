import './index.less';
import { loginInPhone } from 'axios/api/login';

const test = async () => {
  const res = await loginInPhone({ phone: '18518137540', password: 'kangtaotao123' });
  console.log('res', res);
};
test();

const Login = () => {
  return <div className="container login-container">login</div>
};

export default Login;