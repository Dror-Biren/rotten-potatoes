import React from 'react';
//import { Select } from 'antd';

//const { Option } = Select;

const children = [1,2];
/*
for (let i = 10; i < 36; i++) {
   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
*/
export default class SelectGenres2 extends React.Component {
   handleChange(value) {
      console.log(`selected ${value}`);
   }

   render() {
      return (<p>wow</p>);
      /*
      (
         <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={this.handleChange}
         >
            {children}
         </Select>
      );
      */
   }
}