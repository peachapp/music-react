import { Button } from 'antd-mobile';
import Loading from 'components/loading/index';

const Test = () => {
  return <div className="container test-container">test<Loading /><Button type="primary">按钮</Button></div>
};

export default Test;
