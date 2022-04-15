import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Tree } from 'antd';
const treeData = [...Array(1000)].map((e, i) => ({
  title: `parent ${i}`,
  key: `${i}`,
  children: [
    {
      title: `children ${i}`,
      key: `children-${i}`,
      children: [
        {
          title: `leaf ${i}`,
          key: `leaf-${i}`,
        }
      ],
    }
  ],
}));

const Demo = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

ReactDOM.render(<Demo />, document.getElementById('container'));