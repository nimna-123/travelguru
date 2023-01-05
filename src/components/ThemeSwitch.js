import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleActions } from '../store/index';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
const ThemeSwitch = () =>{
    const dispatch = useDispatch();
    const show = useSelector((state) => state.lightMode);
    const handleChange = () => {
      dispatch(toggleActions.toggleMode());
      };
    return(
        <Switch
        onChange={handleChange}
        checked={show}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />

    )
}
export default ThemeSwitch