import { Tag, Form, Input, Select } from 'antd';
import { CardX } from '../Common/UIElements';
import { Filters, Filter, TableX, ModalX } from './style';
import { useState } from 'react';

const { Option } = Select;


function showmodal(visible, setVisible) {
  return <ModalX
    visible={visible}
    okText="Update"
    title="Update student profile"
    onCancel={() => setVisible(false)}
    onOk={() => setVisible(false)}
  >
    <Form layout="horizontal">
      <Form.Item label="Name">
        <Input type="text" value="John" />
      </Form.Item>

      <Form.Item label="Roll Number">
        <Input type="text" value="AU-WP-001" />
      </Form.Item>

      <Form.Item label="Gender">
        <Select defaultValue="male">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Email">
        <Input type="text" value="student@attainu.com" />
      </Form.Item>

      <Form.Item label="Phone Number">
        <Input type="text" value="88888888" />
      </Form.Item>

      <Form.Item label="Github Username">
        <Input type="text" value="john-brown" />
      </Form.Item>
    </Form>
  </ModalX>
}

const filters = () => <Filters>
  <Filter>Filters: </Filter>
  <Select defaultValue="all" style={{ width: '200px' }}>
    <Option value="all">All Batches</Option>
    <Option value="woodpecker">Woodpecker</Option>
    <Option value="robin">Robin</Option>
  </Select>
  <Input type="text" placeholder="Search by (name/email/phone)" />
</Filters >

const StudentList = () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: data => <a href={`/student/${data.id}`}>{data.name}</a>,
    },
    {
      title: 'Roll No',
      dataIndex: 'rollno',
      key: 'rollno'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'GitHub',
      dataIndex: 'github',
      key: 'github',
      render: data => <span><a target="_blanck" href="https://github.com/webmastervishal">{data}</a></span>
    },
    {
      title: 'Batch',
      key: 'batch',
      dataIndex: 'batch',
      render: data => <span><Tag color="geekblue">{data}</Tag></span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: data => <span><Tag color={data === 'active' ? 'green' : 'red'}>{data}</Tag></span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() => setVisible(true)}>Edit</a>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      id: '1',
      name: { name: 'John Brown', id: '1' },
      rollno: 'AU-WP-001',
      gender: 'Male',
      email: 'student@attainu.com',
      phone: '8888888888',
      github: 'john-brown',
      batch: 'woodpecker',
      status: 'active'
    },
    {
      key: '2',
      id: '2',
      name: { name: 'Mike', id: '2' },
      rollno: 'AU-WP-002',
      gender: 'Male',
      email: 'mike@attainu.com',
      phone: '333333333',
      github: 'mike-git',
      batch: 'Robin',
      status: 'inactive'
    }
  ];

  return <CardX title="List of Students" extra={filters()}>
    <TableX columns={columns} dataSource={data} />
    {showmodal(visible, setVisible)}
  </CardX>
}

export default StudentList;
